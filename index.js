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
body.append(textarea)

keyboardWrapper.classList.add('keyboard-wrapper');

for (let i = 1; i <= 5; i++) {
  const lineWraper = document.createElement('div');
  lineWraper.classList.add('line-wrapper', `line-wraper-${i}`);
  switch (i) {
    case 1: 
      Object.keys(codes['en']['lower']).forEach(el => {
        const button = new Button (el);
        lineWraper.append(button.createButton())
      });
      break;
    case 2: 

  }
  keyboardWrapper.append(lineWraper);
}
let a = {}
// firstLine.forEach(el => a[el] = 1)
// console.log(Object.keys(codes['en']['lower']))


body.append(keyboardWrapper)


function pressButton (data) {
  let code;
  if (typeof data === 'object') {
    code = data.code
  } else if (typeof data === 'string'){
    code = data
  }
  const button = document.querySelector(`[data-key-code="${code}"]`)
  button.classList.add('pressed');
  switch (code) {
    case 'Backspace':
      textarea.innerHTML = textarea.innerHTML.slice(0, -1)
      break;
    default:
      textarea.innerHTML += button.innerHTML
  }
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
}

// window.addEventListener('keydown', event => console.log(event.code))
keyboardWrapper.addEventListener('keydown', event => {
  if (event.key) {
    pressButton(event)
  }
})
keyboardWrapper.addEventListener('mousedown', event => {
  if (event.target.dataset.keyCode) {
    pressButton(event.target.dataset.keyCode)
  }
})
keyboardWrapper.addEventListener('keyup', event => {
  if (event.key) {
    clearButton(event)
  }
})
keyboardWrapper.addEventListener('mouseup', event => {
  if (event.target.dataset.keyCode) {
    clearButton(event.target.dataset.keyCode)
  }
})