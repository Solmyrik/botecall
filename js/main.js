const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const audioElement1 = new Audio('audio/Первый экран.mp3');
const audioElement2 = new Audio('audio/Провайдер.mp3');
const audioElement3 = new Audio('audio/Стоматология.mp3');
const audioElement4 = new Audio('audio/Косметология.mp3');

const audios = [audioElement1, audioElement2, audioElement3, audioElement4];

const inpi = document.querySelectorAll('.input-musik');

// audioElement1.addEventListener('timeupdate', (e) => {
//   inpi[0].value = audioElement1.currentTime;
// });

// inpi[0].onchange = (e) => {
//   audioElement1.currentTime = e.target.value;
//   console.log(e.target.value);
//   audioElement1.play();
// };
// audioElement1.addEventListener('timeupdate', (e) => {
//   inpi[1].value = audioElement1.currentTime;
// });

// inpi[1].onchange = (e) => {
//   audioElement1.currentTime = e.target.value;
//   console.log(e.target.value);
//   audioElement1.play();
// };

const playerBtn = document.querySelectorAll('.player__btns');

function musikPlay(playerBtn, audio) {
  playerBtn.onclick = (e) => {
    if (e.target.src.includes('play')) {
      audio.play();
      e.target.parentNode.parentNode.children[0].classList.remove('active');
      e.target.parentNode.parentNode.children[1].classList.add('active');
    } else {
      audio.pause();
      e.target.parentNode.parentNode.children[1].classList.remove('active');
      e.target.parentNode.parentNode.children[0].classList.add('active');
    }
  };
}
for (let i = 0; i < playerBtn.length; i++) {
  audios[i].addEventListener('timeupdate', (e) => {
    inpi[i].value = audios[i].currentTime;
  });

  inpi[i].onchange = (e) => {
    audios[i].currentTime = e.target.value;
    console.log(e.target.value);
    audios[i].play();
  };
  musikPlay(playerBtn[i], audios[i]);
}

const up = document.querySelector('.footer__up');

up.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var phoneInputs = document.querySelectorAll('input[data-tel-input]');

  var getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  };

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = '';

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9', '1', '2', '3', '4', '5', '6', '0'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] != '7') inputNumbersValue = '7' + inputNumbersValue;
      var firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = '';
    }
  };
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
});

const popupBtn = document.querySelector('.popup-local__btn');
const popupName = document.querySelector('.popup-local__name');
const popupNumber = document.querySelector('.popup-local__number');
const popupError = document.querySelector('.popup-local__error');

const popupForm = document.querySelector('.popup-local__form');
const popupThanks = document.querySelector('.popup-local__thanks');

if (popupBtn) {
  popupBtn.addEventListener('click', () => {
    let error = 0;
    if (popupName.value.length < 3) {
      error++;
    }
    if (popupNumber.value.length < 18) {
      error++;
    }
    if (error > 0) {
      popupError.style.display = 'block';
    } else {
      popupForm.style.display = 'none';
      popupThanks.style.display = 'block';
    }
  });
}
const wantBtn = document.querySelector('.want__btn');
const wantName = document.querySelector('.want__name');
const wantNumber = document.querySelector('.want__number');

const wantBtnFake = document.querySelector('.want__bnk');

if (wantBtn) {
  wantBtn.addEventListener('click', () => {
    let error = 0;
    if (wantName.value.length < 3) {
      error++;
    }
    if (wantNumber.value.length < 18) {
      error++;
    }
    if (error == 0) {
      wantBtnFake.click();
      botName.value = wantName.value;
      botNumber.value = wantNumber.value;
      wantName.value = '';
      wantNumber.value = '';
      botsend.click();
    }
  });
}
