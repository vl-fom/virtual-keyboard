// const codes = require('./data')


const body = document.querySelector('body');
const textarea = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');
let lang = 'en';
let keyCase = 'lower';
let isCapsLockPressed = false


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => textarea.innerHTML = '')

class Button {
  constructor (dataAttr) {
    this.dataAttr = dataAttr;
  }

  setDataAttr (data) {
    this.dataAttr = dataAttr;
  }

  createButton () {
    const button = document.createElement('button');
    button.classList.add('button');
    button.dataset.keyCode = this.dataAttr;
    button.innerHTML = codes[lang][keyCase][this.dataAttr]
    return button;
  }
}

textarea.classList.add('textarea');
textarea.rows = 7;
textarea.autofocus = true

// textarea.addEventListener('click', () => console.log(textarea.value))
body.append(textarea)

keyboardWrapper.classList.add('keyboard-wrapper');

for (let i = 1; i <= 5; i++) {
  const lineWraper = document.createElement('div');
  lineWraper.classList.add('line-wrapper', `line-wraper-${i}`);
  switch (i) {
    case 1: 
      Object.keys(codes['en']['lower']).slice(0, 14).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 2: 
      Object.keys(codes['en']['lower']).slice(14, 29).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 3: 
      Object.keys(codes['en']['lower']).slice(29, 42).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 4: 
      Object.keys(codes['en']['lower']).slice(42, 55).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 5: 
      Object.keys(codes['en']['lower']).slice(55).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
  }
  keyboardWrapper.append(lineWraper);
}
body.append(keyboardWrapper)
// let a = {}
// firstLine.forEach(el => a[el] = 1)
// console.log(Object.keys(codes['en']['lower']))
const capsLock = document.querySelector('[data-key-code="CapsLock"]');


const test = document.querySelector('.test')
test.addEventListener('click', () => {
  let letters =  Array.prototype.slice.call(keyboardWrapper.querySelectorAll('button'))
  letters = letters.filter(btn => btn.dataset.keyCode.startsWith('Key'))
  console.log('isCapsLockPressed = ', isCapsLockPressed)
  console.log(letters)
  if (isCapsLockPressed === false) {
    isCapsLockPressed = true;
    letters.forEach(letter => letter.innerHTML = letter.innerHTML.toUpperCase())
  } else {
    isCapsLockPressed = false;
    letters.forEach(letter => letter.innerHTML = letter.innerHTML.toLowerCase())
  }
})



function pressButton (data) {
  let code;
  if (typeof data === 'object') {
    code = data.code
    data.preventDefault()
  } else if (typeof data === 'string'){
    code = data
  }
  const button = document.querySelector(`[data-key-code="${code}"]`)
  button.classList.add('pressed');
  let caretPosition, message;
  switch (code) {
    case 'Backspace':
      caretPosition = getCaretPosition ().start
      message = textarea.innerHTML.split('')
      if (caretPosition > 0) {
        message.splice(caretPosition - 1, 1)
      } else {
        break;
      }
      textarea.innerHTML = message.join('');
      textarea.setSelectionRange(caretPosition - 1, caretPosition - 1)
      break;
    case 'Delete':
      caretPosition = getCaretPosition ().start
      message = textarea.innerHTML.split('')
      if (caretPosition < message.length) {
        message.splice(caretPosition, 1)
      }
      textarea.innerHTML = message.join('');
      textarea.setSelectionRange(caretPosition, caretPosition)
      break;
    case 'Space':
      insertData (' ')
      break;
    case 'CapsLock':
      pressCapsLock ()
      break;
    case 'Tab':
      insertData ('\t')
      break;
    case 'Enter':
      insertData ('\n')
      break;
    case 'ControlLeft':
    case 'ControlRight':
      textarea.innerHTML += ''
      break;
    case 'AltLeft':
    case 'AltRight':
      textarea.innerHTML += ''
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      textarea.innerHTML += ''
      break;
    default:
      insertData (button.innerHTML)
  }
}

function insertData (data) {
  let caretPosition = getCaretPosition ().start
  let message = textarea.innerHTML.split('')
  message.splice(caretPosition, (getCaretPosition().end - caretPosition), data)
  textarea.innerHTML = message.join('');
  textarea.setSelectionRange(caretPosition + data.length, caretPosition + data.length)
}

function clearButton (data) {
  let code;
  if (typeof data === 'object') {
    code = data.code
  } else if (typeof data === 'string'){
    code = data
  }
  const button = document.querySelector(`[data-key-code="${code}"]`)
  button.classList.remove('pressed');
  textarea.focus()
}

// let a = {}
// window.addEventListener('keydown', event => {a[`${event.code}`]=`${event.key}`

// console.log(a)})
// console.log(codes.en.lower.Backslash.toUpperCase())

function getCaretPosition () {
  if (textarea.selectionStart || textarea.selectionStart == '0') {
    return {'start': textarea.selectionStart, 'end': textarea.selectionEnd };
  } else {
    return {'start': 0, 'end': 0};
  }
}

function pressCapsLock () {
  capsLock.classList.toggle('active')
  let letters =  Array.prototype.slice.call(keyboardWrapper.querySelectorAll('button'))
  letters = letters.filter(btn => btn.dataset.keyCode.startsWith('Key'))
  if (isCapsLockPressed === false) {
    isCapsLockPressed = true;
    letters.forEach(letter => letter.innerHTML = letter.innerHTML.toUpperCase())
  } else {
    isCapsLockPressed = false;
    letters.forEach(letter => letter.innerHTML = letter.innerHTML.toLowerCase())
  }
}

window.addEventListener('keydown', event => {
  if (event.key) {
    pressButton(event)
  }
})
keyboardWrapper.addEventListener('mousedown', event => {
  if (event.target.dataset.keyCode) {
    pressButton(event.target.dataset.keyCode)
  }
})
window.addEventListener('keyup', event => {
  if (event.key) {
    clearButton(event)
  }
})
keyboardWrapper.addEventListener('mouseup', event => {
  if (event.target.dataset.keyCode) {
    clearButton(event.target.dataset.keyCode)
  }
})