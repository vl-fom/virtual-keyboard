// const codes = require('./data')


const body = document.querySelector('body');
const textarea = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');
let lang = 'en';
let keyCase = 'lower';

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


const test = document.querySelector('.test')
test.addEventListener('click', () => {
  textarea.setSelectionRange(1, 1)
  console.log(getCaretPosition())
  textarea.focus()
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
  switch (code) {
    case 'Backspace':
      textarea.innerHTML = textarea.innerHTML.slice(0, -1)
      break;
    case 'Space':
      textarea.innerHTML += ' '
      break;
    case 'Tab':
      textarea.innerHTML += '    '
      break;
    case 'Enter':
      // textarea.innerHTML += '\n'
      insertDataByCaretPosition ('\n')
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
      insertDataByCaretPosition (button.innerHTML)
  }
}

function insertDataByCaretPosition (data) {
  let caretPosition = getCaretPosition ().start
  let message = textarea.innerHTML.split('')
  message.splice(getCaretPosition().start, (getCaretPosition().end - getCaretPosition().start), data)
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