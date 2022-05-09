// const codes = require('./data')

const body = document.querySelector('body');
const textarea = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');
// let [lang, keyCase] = ['en', 'lower'];
let lang = 'en';
let keyCase = 'lower'
let [isCapsLockPressed, isShiftPressed, isControlPressed, isAltPressed] = [false, false,  false, false];

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => textarea.innerHTML = '')

window.addEventListener('load', getLocalStorage());
window.addEventListener('beforeunload', setLocalStorage);

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

function setLocalStorage () {
  localStorage.setItem('lang', lang);
}

function getLocalStorage () {
  if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
  }
}


textarea.classList.add('textarea');
textarea.rows = 7;
textarea.cols = 50;
textarea.autofocus = true

body.append(textarea)

keyboardWrapper.classList.add('keyboard-wrapper');

for (let i = 1; i <= 5; i++) {
  const lineWraper = document.createElement('div');
  lineWraper.classList.add('line-wrapper', `line-wraper-${i}`);
  switch (i) {
    case 1: 
      Object.keys(codes[lang]['lower']).slice(0, 14).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 2: 
      Object.keys(codes[lang]['lower']).slice(14, 29).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 3: 
      Object.keys(codes[lang]['lower']).slice(29, 42).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 4: 
      Object.keys(codes[lang]['lower']).slice(42, 55).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 5: 
      Object.keys(codes[lang]['lower']).slice(55).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
  }
  keyboardWrapper.append(lineWraper);
}
body.append(keyboardWrapper)
const capsLock = document.querySelector('[data-key-code="CapsLock"]');
const shiftLeft = keyboardWrapper.querySelector('[data-key-code="ShiftLeft"]');
const shiftRight = keyboardWrapper.querySelector('[data-key-code="ShiftRight"]');
const controlLeft = keyboardWrapper.querySelector('[data-key-code="ControlLeft"]');
const controlRight = document.querySelector('[data-key-code="ControlRight"]');
const altLeft = keyboardWrapper.querySelector('[data-key-code="AltLeft"]');
const altRight = document.querySelector('[data-key-code="AltRight"]');


function updateKeyboard () {
  keyboardWrapper.querySelectorAll('button').forEach(el => el.innerHTML = codes[lang][keyCase][el.dataset.keyCode])
}

const test = document.querySelector('.test')

test.addEventListener('click', () => {
  if (lang === 'en') {
    lang = 'ru'
  } else {
    lang = 'en'
  }
  updateKeyboard ()
})

function shift () {
  shiftLeft.classList.add('active')
  isShiftPressed = true;
  keyCase = 'upper'
  updateKeyboard ()
}

function unshift () {
  shiftLeft.classList.remove('active')
  isShiftPressed = false;
  keyCase = 'lower';
  updateKeyboard ()
}

function changeLang () {
  if (isAltPressed === true && isControlPressed === true) {
    if (lang === 'en') {
      lang = 'ru'
    } else {
      lang = 'en'
    }
    updateKeyboard ()
    isAltPressed = false;
    isControlPressed = false;
    [controlLeft, altLeft].forEach(el => el.classList.remove('active'))
    
  }
}

function pressButton (data) {
  let code;
  if (typeof data === 'object') {
    code = data.code
    data.preventDefault()
  } else if (typeof data === 'string'){
    code = data
  }
  if (!document.querySelector(`[data-key-code="${code}"]`)) {
    return;
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
    case 'Tab':
      insertData ('\t')
      break;
    case 'Space':
      insertData (' ')
      break;
    case 'Enter':
      insertData ('\n')
      break;
    case 'CapsLock':
      pressCapsLock ()
      break;
    case 'MetaLeft':
      break;
    case 'ControlLeft':
    case 'ControlRight':
      if (isControlPressed) {
        isControlPressed = false
      } else {
        isControlPressed = true
      }
      controlLeft.classList.toggle('active')
      changeLang ()
      break;
    case 'AltLeft':
    case 'AltRight':
      if (isAltPressed) {
        isAltPressed = false
      } else {
        isAltPressed = true
      }
      altLeft.classList.toggle('active')
      changeLang ()
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      if (isShiftPressed) {
        unshift ()
      } else {
        shift ();
      }
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
  textarea.setSelectionRange(caretPosition + 1, caretPosition + 1)
}

function clearButton (data) {
  let code;
  if (typeof data === 'object') {
    code = data.code
  } else if (typeof data === 'string'){
    code = data
  }
  if (!document.querySelector(`[data-key-code="${code}"]`)) {
    return;
  }
  const button = document.querySelector(`[data-key-code="${code}"]`)
  button.classList.remove('pressed');
  textarea.focus()
}

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