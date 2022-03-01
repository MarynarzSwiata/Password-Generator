'use strict mode';

/*
Simple Password Generator with length slider and option to select variation of password.

Better random numbers to be used as per:
- https://developer.mozilla.org/en-US/docs/Web/API/crypto_property
- https://github.com/ai/nanoid

*/

const num = '0123456789';
const lett = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars = '!@#$%^&*()_+~`|}{[]:\;?><,./-=';

//FUNCTIONS
function generator (val) {
  const len = document.getElementById('passwordLength').value;
  let pass = '';
  for (let i = 0; i < len; i++) {
    const random = Math.floor(Math.random() * val.length);
    pass += val.substring(random, random + 1);
  }
  return pass;
}

function copyPassword() {
  const copyText = document.getElementById('password').value;
  if (copyText === "") {
  } else {
    navigator.clipboard.writeText(copyText).then(() => {
    alert("Your password is copied to clipboard. After 30s password will be cleared off from clipboard.") ;});
    setTimeout(() => {navigator.clipboard.writeText('');}, 30000);
  }
}

function generatePassword() {
  const password = document.getElementById('password');
  const checkedNumbers = document.getElementById('numbers').checked;
  const checkedLetters = document.getElementById('letters').checked;
  const checkedCharacters = document.getElementById('characters').checked;

  const checkNum = checkedNumbers ? generator(num) : '' ;
  const checkLet = checkedLetters ? generator(lett) : '' ;
  const checkChar = checkedCharacters ? generator(chars) : '' ;

  const finalPassword = generator(checkNum+checkLet+checkChar);
  password.value = finalPassword;
}

// Manual button function
copy.addEventListener('click', copyPassword);
generate.addEventListener('click', generatePassword);

