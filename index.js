const codes = { // можно сразу свернуть
  en: {
    lower: {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: '&larr;&nbsp;Backspace',

      Tab: 'Tab',
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      BracketLeft: '[',
      BracketRight: ']',
      Backslash: '\\',
      Delete: 'Del',

      CapsLock: 'Caps Lock',
      KeyA: 'a',
      KeyS: 's',
      KeyD: 'd',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      Semicolon: ';',
      Quote: '\'',
      Enter: 'Enter',

      ShiftLeft: 'Shift',
      KeyZ: 'z',
      KeyX: 'x',
      KeyC: 'c',
      KeyV: 'v',
      KeyB: 'b',
      KeyN: 'n',
      KeyM: 'm',
      Comma: ',',
      Period: '.',
      Slash: '/',
      ArrowUp: '&uarr;',
      ShiftRight: 'Shift',

      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: 'Space',
      AltRight: 'Alt',
      ControlRight: 'Ctrl',
      ArrowLeft: '&larr;',
      ArrowDown: '&darr;',
      ArrowRight: '&rarr;',
    },

    upper: {
      Backquote: '~',
      Digit1: '!',
      Digit2: '@',
      Digit3: '#',
      Digit4: '$',
      Digit5: '%',
      Digit6: '^',
      Digit7: '&',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
      Minus: '_',
      Equal: '+',
      Backspace: '&larr;&nbsp;Backspace',

      Tab: 'Tab',
      KeyQ: 'Q',
      KeyW: 'W',
      KeyE: 'E',
      KeyR: 'R',
      KeyT: 'T',
      KeyY: 'Y',
      KeyU: 'U',
      KeyI: 'I',
      KeyO: 'O',
      KeyP: 'P',
      BracketLeft: '{',
      BracketRight: '}',
      Backslash: '|',
      Delete: 'Del',

      CapsLock: 'Caps Lock',
      KeyA: 'A',
      KeyS: 'S',
      KeyD: 'D',
      KeyF: 'F',
      KeyG: 'G',
      KeyH: 'H',
      KeyJ: 'J',
      KeyK: 'K',
      KeyL: 'L',
      Semicolon: ':',
      Quote: '"',
      Enter: 'Enter',

      ShiftLeft: 'Shift',
      KeyZ: 'Z',
      KeyX: 'X',
      KeyC: 'C',
      KeyV: 'V',
      KeyB: 'B',
      KeyN: 'N',
      KeyM: 'M',
      Comma: '<',
      Period: '>',
      Slash: '?',
      ArrowUp: '&uarr;',
      ShiftRight: 'Shift',

      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: 'Space',
      AltRight: 'Alt',
      ControlRight: 'Ctrl',
      ArrowLeft: '&larr;',
      ArrowDown: '&darr;',
      ArrowRight: '&rarr;',
    },
  },

  ru: {
    lower: {
      Backquote: 'ё',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: '&larr;&nbsp;Backspace',

      Tab: 'Tab',
      KeyQ: 'й',
      KeyW: 'ц',
      KeyE: 'у',
      KeyR: 'к',
      KeyT: 'е',
      KeyY: 'н',
      KeyU: 'г',
      KeyI: 'ш',
      KeyO: 'щ',
      KeyP: 'з',
      BracketLeft: 'х',
      BracketRight: 'ъ',
      Backslash: '\\',
      Delete: 'Del',

      CapsLock: 'Caps Lock',
      KeyA: 'ф',
      KeyS: 'ы',
      KeyD: 'в',
      KeyF: 'а',
      KeyG: 'п',
      KeyH: 'р',
      KeyJ: 'о',
      KeyK: 'л',
      KeyL: 'д',
      Semicolon: 'ж',
      Quote: 'э',
      Enter: 'Enter',

      ShiftLeft: 'Shift',
      KeyZ: 'я',
      KeyX: 'ч',
      KeyC: 'с',
      KeyV: 'м',
      KeyB: 'и',
      KeyN: 'т',
      KeyM: 'ь',
      Comma: 'б',
      Period: 'ю',
      Slash: '.',
      ArrowUp: '&uarr;',
      ShiftRight: 'Shift',

      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: 'Space',
      AltRight: 'Alt',
      ControlRight: 'Ctrl',
      ArrowLeft: '&larr;',
      ArrowDown: '&darr;',
      ArrowRight: '&rarr;',
    },

    upper: {
      Backquote: 'Ё',
      Digit1: '!',
      Digit2: '"',
      Digit3: '№',
      Digit4: ';',
      Digit5: '%',
      Digit6: ':',
      Digit7: '?',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
      Minus: '_',
      Equal: '+',
      Backspace: '&larr;&nbsp;Backspace',

      Tab: 'Tab',
      KeyQ: 'Й',
      KeyW: 'Ц',
      KeyE: 'У',
      KeyR: 'К',
      KeyT: 'Е',
      KeyY: 'Н',
      KeyU: 'Г',
      KeyI: 'Ш',
      KeyO: 'Щ',
      KeyP: 'З',
      BracketLeft: 'Х',
      BracketRight: 'Ъ',
      Backslash: '/',
      Delete: 'Del',

      CapsLock: 'Caps Lock',
      KeyA: 'Ф',
      KeyS: 'Ы',
      KeyD: 'В',
      KeyF: 'А',
      KeyG: 'П',
      KeyH: 'Р',
      KeyJ: 'О',
      KeyK: 'Л',
      KeyL: 'Д',
      Semicolon: 'Ж',
      Quote: 'Э',
      Enter: 'Enter',

      ShiftLeft: 'Shift',
      KeyZ: 'Я',
      KeyX: 'Ч',
      KeyC: 'С',
      KeyV: 'М',
      KeyB: 'И',
      KeyN: 'Т',
      KeyM: 'Ь',
      Comma: 'Б',
      Period: 'Ю',
      Slash: ',',
      ArrowUp: '&uarr;',
      ShiftRight: 'Shift',

      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: 'Space',
      AltRight: 'Alt',
      ControlRight: 'Ctrl',
      ArrowLeft: '&larr;',
      ArrowDown: '&darr;',
      ArrowRight: '&rarr;',
    },
  },
};

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const title = document.createElement('h2');
const howChangeLang = document.createElement('p');
const systemOS = document.createElement('p');
const keyboardWrapper = document.createElement('div');
let [lang, keyCase] = ['en', 'lower'];
let [isCapsPressed, isShiftPressed, isCtrllPressed, isAltPressed] = [false, false, false, false];

const clearBtn = document.createElement('button');
clearBtn.classList.add('.clearBtn');
clearBtn.addEventListener('click', () => {
  textarea.innerHTML = '';
});

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
}

window.addEventListener('load', getLocalStorage());
window.addEventListener('beforeunload', setLocalStorage);

class Button {
  constructor(dataAttr) {
    this.dataAttr = dataAttr;
  }

  createButton() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.dataset.keyCode = this.dataAttr;
    button.innerHTML = codes[lang][keyCase][this.dataAttr];
    return button;
  }
}

wrapper.classList.add('wrapper');
textarea.classList.add('textarea');
title.classList.add('title');
howChangeLang.classList.add('howChangeLang');
systemOS.classList.add('systemOS');
title.innerHTML = 'Виртуальная клавиатура';
textarea.rows = 7;
textarea.autofocus = true;
howChangeLang.innerHTML = 'Переключение языка: ctrl + alt';
systemOS.innerHTML = 'Клавиатура создана в операционной системе Windows<br><br>';
clearBtn.innerHTML = 'Очистить';
clearBtn.classList.add('.clearBtn');
clearBtn.addEventListener('click', () => {
  textarea.innerHTML = '';
  textarea.focus();
});
systemOS.append(clearBtn);
keyboardWrapper.classList.add('keyboard-wrapper');

for (let i = 1; i <= 5; i += 1) {
  const lineWraper = document.createElement('div');
  lineWraper.classList.add('line-wrapper', `line-wraper-${i}`);
  switch (i) {
  case 1:
    Object.keys(codes[lang].lower).slice(0, 14).forEach((el) => {
      const button = new Button(el);
      lineWraper.append(button.createButton());
    });
    break;
  case 2:
    Object.keys(codes[lang].lower).slice(14, 29).forEach((el) => {
      const button = new Button(el);
      lineWraper.append(button.createButton());
    });
    break;
  case 3:
    Object.keys(codes[lang].lower).slice(29, 42).forEach((el) => {
      const button = new Button(el);
      lineWraper.append(button.createButton());
    });
    break;
  case 4:
    Object.keys(codes[lang].lower).slice(42, 55).forEach((el) => {
      const button = new Button(el);
      lineWraper.append(button.createButton());
    });
    break;
  default:
    Object.keys(codes[lang].lower).slice(55).forEach((el) => {
      const button = new Button(el);
      lineWraper.append(button.createButton());
    });
    break;
  }
  keyboardWrapper.append(lineWraper);
}

wrapper.append(title, textarea, keyboardWrapper, howChangeLang, systemOS);
body.prepend(wrapper);

const capsLock = document.querySelector('[data-key-code="CapsLock"]');
const shiftLeft = keyboardWrapper.querySelector('[data-key-code="ShiftLeft"]');
const controlLeft = keyboardWrapper.querySelector('[data-key-code="ControlLeft"]');
const altLeft = keyboardWrapper.querySelector('[data-key-code="AltLeft"]');

function updateKeyboard() {
  keyboardWrapper.querySelectorAll('button').forEach((el) => {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = codes[lang][keyCase][el.dataset.keyCode];
  });
}

function shift() {
  shiftLeft.classList.add('active');
  isShiftPressed = true;
  keyCase = 'upper';
  updateKeyboard();
}

function unshift() {
  shiftLeft.classList.remove('active');
  isShiftPressed = false;
  keyCase = 'lower';
  updateKeyboard();
}

function changeLang() {
  if (isAltPressed === true && isCtrllPressed === true) {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    updateKeyboard();
    isAltPressed = false;
    isCtrllPressed = false;
    [controlLeft, altLeft].forEach((el) => el.classList.remove('active'));
  }
}

function getCaretPosition() {
  if (textarea.selectionStart || textarea.selectionStart === '0') {
    return { start: textarea.selectionStart, end: textarea.selectionEnd };
  }
  return { start: 0, end: 0 };
}

function insertData(data) {
  const caretPosition = getCaretPosition().start;
  const message = textarea.innerHTML.split('');
  message.splice(caretPosition, (getCaretPosition().end - caretPosition), data);
  textarea.innerHTML = message.join('');
  textarea.setSelectionRange(caretPosition + 1, caretPosition + 1);
}

function clearButton(data) {
  let code;
  if (typeof data === 'object') {
    code = data.code;
  } else if (typeof data === 'string') {
    code = data;
  }
  if (!document.querySelector(`[data-key-code="${code}"]`)) {
    return;
  }
  const button = document.querySelector(`[data-key-code="${code}"]`);
  button.classList.remove('pressed');
  textarea.focus();
}

function pressCapsLock() {
  capsLock.classList.toggle('active');
  let letters = Array.prototype.slice.call(keyboardWrapper.querySelectorAll('button'));
  letters = letters.filter((btn) => btn.dataset.keyCode.startsWith('Key'));
  if (isCapsPressed === false) {
    isCapsPressed = true;
    letters.forEach((letter) => {
      // eslint-disable-next-line no-param-reassign
      letter.innerHTML = letter.innerHTML.toUpperCase();
    });
  } else {
    isCapsPressed = false;
    letters.forEach((letter) => {
      // eslint-disable-next-line no-param-reassign
      letter.innerHTML = letter.innerHTML.toLowerCase();
    });
  }
}

function pressButton(data) {
  let code;
  if (typeof data === 'object') {
    code = data.code;
    data.preventDefault();
  } else if (typeof data === 'string') {
    code = data;
  }
  if (!document.querySelector(`[data-key-code="${code}"]`)) {
    return;
  }
  const button = document.querySelector(`[data-key-code="${code}"]`);
  button.classList.add('pressed');
  let caretPosition; let
    message;
  switch (code) {
  case 'Backspace':
    caretPosition = getCaretPosition().start;
    message = textarea.innerHTML.split('');
    if (caretPosition > 0) {
      message.splice(caretPosition - 1, 1);
    } else {
      break;
    }
    textarea.innerHTML = message.join('');
    textarea.setSelectionRange(caretPosition - 1, caretPosition - 1);
    break;
  case 'Delete':
    caretPosition = getCaretPosition().start;
    message = textarea.innerHTML.split('');
    if (caretPosition < message.length) {
      message.splice(caretPosition, 1);
    }
    textarea.innerHTML = message.join('');
    textarea.setSelectionRange(caretPosition, caretPosition);
    break;
  case 'Tab':
    insertData('\t');
    break;
  case 'Space':
    insertData(' ');
    break;
  case 'Enter':
    insertData('\n');
    break;
  case 'CapsLock':
    pressCapsLock();
    break;
  case 'MetaLeft':
    break;
  case 'ControlLeft':
  case 'ControlRight':
    if (isCtrllPressed) {
      isCtrllPressed = false;
    } else {
      isCtrllPressed = true;
    }
    controlLeft.classList.toggle('active');
    changeLang();
    break;
  case 'AltLeft':
  case 'AltRight':
    if (isAltPressed) {
      isAltPressed = false;
    } else {
      isAltPressed = true;
    }
    altLeft.classList.toggle('active');
    changeLang();
    break;
  case 'ShiftLeft':
  case 'ShiftRight':
    if (isShiftPressed) {
      unshift();
    } else {
      shift();
    }
    break;
  default:
    insertData(button.innerHTML);
  }
}

window.addEventListener('keydown', (event) => {
  if (event.key) {
    pressButton(event);
  }
});
keyboardWrapper.addEventListener('mousedown', (event) => {
  if (event.target.dataset.keyCode) {
    pressButton(event.target.dataset.keyCode);
  }
});
window.addEventListener('keyup', (event) => {
  if (event.key) {
    clearButton(event);
  }
});
keyboardWrapper.addEventListener('mouseup', (event) => {
  if (event.target.dataset.keyCode) {
    clearButton(event.target.dataset.keyCode);
  }
});
