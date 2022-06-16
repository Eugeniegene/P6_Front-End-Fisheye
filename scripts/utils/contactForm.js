// all console.logs are still visible as requested
/* eslint-disable no-console */

//* ***********GENERAL FUNCTIONS************//
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function clickModal() {
  const contactBtn = document.getElementsByClassName('contact_button');
  contactBtn.addEventListener('click');
  displayModal();
}
clickModal();

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}
function keydown(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
}
document.addEventListener('keydown', keydown, false);

//* ***********FORM FIELDS************//
const form = document.getElementById('contact_modal');
const formName = document.getElementById('contact_modal-photographer-name');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const confirmationMsg = document.getElementsByClassName('confirm-message');

//* ***********CAUGHT ERRORS - DOM NOT VALIDATED************//
const formDataFirstName = document.querySelector('#first-name').parentNode;
const formDataLastName = document.querySelector('#last-name').parentNode;
const formDataEmail = document.querySelector('#email').parentNode;
const formDataMessage = document.querySelector('#message').parentNode;

//* ***********FORM DATA AND ERROR MESSAGES ************//
function validateFirstName() {
  console.log(firstName.value);
  if (firstName.value === '' || firstName.value == null) {
    formDataFirstName.setAttribute(
      'data-error',
      'Veuillez saisir votre prénom.',
    );
    formDataFirstName.setAttribute('data-error-visible', 'true');
    return false;
  } if (firstName.value.length < 2) {
    formDataFirstName.setAttribute(
      'data-error',
      'Veuillez entrer 2 caractères minimum',
    );
    formDataFirstName.setAttribute('data-error-visible', 'true');
    return false;
  }
  document.getElementById('first-name').style.border = '3px solid green';
  formDataFirstName.removeAttribute('data-error');
  formDataFirstName.removeAttribute('data-error-visible');
  return true;
}
function validateLastName() {
  console.log(lastName.value);
  if (lastName.value === '') {
    formDataLastName.setAttribute(
      'data-error',
      'Veuillez saisir votre nom.',
    );
    formDataLastName.setAttribute('data-error-visible', 'true');
    return false;
  } if (lastName.value.length < 2) {
    formDataLastName.setAttribute(
      'data-error',
      'Veuillez entrer 2 caractères minimum.',
    );
    formDataLastName.setAttribute('data-error-visible', 'true');
    return false;
  }
  document.getElementById('last-name').style.border = '3px solid green';
  formDataLastName.removeAttribute('data-error');
  formDataLastName.removeAttribute('data-error-visible');
  return true;
}
function validateEmail() {
  console.log(email.value);
  if (email.value === '') {
    formDataEmail.setAttribute(
      'data-error',
      'Veuillez saisir votre adresse email.',
    );
    formDataEmail.setAttribute('data-error-visible', 'true');
    return false;
  } if (!/^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/.test(email.value)) {
    formDataEmail.setAttribute(
      'data-error',
      'Veuillez entrer une adresse email valide.',
    );
    formDataEmail.setAttribute('data-error-visible', 'true');
    return false;
  }
  document.getElementById('email').style.border = '3px solid green';
  formDataEmail.removeAttribute('data-error');
  formDataEmail.removeAttribute('data-error-visible');
  return true;
}
function validateMessage() {
  console.log(message.value);
  if (message.value === '') {
    formDataMessage.setAttribute(
      'data-error',
      'Veuillez saisir votre adresse message.',
    );
    formDataMessage.setAttribute('data-error-visible', 'true');
    return false;
  }
  document.getElementById('message').style.border = '3px solid green';
  formDataMessage.removeAttribute('data-error');
  formDataMessage.removeAttribute('data-error-visible');
  return true;
}

//* ***********VALIDATE FUNCTION************//
function validate() {
  const isFormValid = [];
  isFormValid.push(validateFirstName(firstName));
  isFormValid.push(validateLastName(lastName));
  isFormValid.push(validateEmail(email));
  isFormValid.push(validateMessage(message));

  if (!isFormValid.includes(false)) {
    form.style.display = 'none';
    formName.style.display = 'none';
    confirmationMsg[0].style.display = 'block';
  }
}
//* ***********SEND FORM FUNCTION************//
//* prevent default will avoid sending an empty form*//
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
});
