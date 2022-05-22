function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//CHAMPS
const formName = document.getElementById('contact_modal-photographer-name');
const firstName = document.getElementById('first-name');//prénom
const lastName = document.getElementById('last-name');//nom
const email = document.getElementById('email');//email
const message = document.getElementById('message');//message
const confirmationBloc = document.getElementsByClassName('confirmation-bloc');// bloc contenant le message de confirmation
const confirmationMsg = document.getElementsByClassName('confirm-message');// message de confirmation
const submiBtn = document.querySelector("send_btn");//bouton envoi formulaire


//ERREURS 
const formDataFirstName = document.querySelector("#first-name").parentNode;//renvoi vers le parent de l'id du prénom
const formDataLastName = document.querySelector("#last-name").parentNode;// renvoi vers le parent de l'id du nom
const formDataEmail = document.querySelector("#email").parentNode; //renvoi vers le parent de l'email
const formDataMessage = document.querySelector("#message").parentNode; //renvoi vers le parent de l'email 

//envoyer un formulaire 
form.addEventListener("submit", function (e) {
    e.preventDefault();//formule permettant d'éviter d'envoyer un formulaire vide 
    validate();//fonction valider 
  });

//DONNES DU FORMULAIRE
function validateFirstName(firstName) {
    if (firstName.value == "" || firstName.value == null ) {
        formDataFirstName.setAttribute(
            "data-error",
            "Veuillez saisir votre prénom."
        );
       formDataFirstName.setAttribute("data-error-visible", "true");
        return false;
  
    } else if (firstName.value.length < 2) {
          formDataFirstName.setAttribute(
              "data-error", 
              "Veuillez entrer 2 caractères minimum" 
          );
        formDataFirstName.setAttribute("data-error-visible", "true");
        return false;
    } else {
        document.getElementById("first-name").style.border = "3px solid green";
        formDataFirstName.removeAttribute("data-error");
        formDataFirstName.removeAttribute("data-error-visible");
        return true;
    }
  }
  function validateLastName(lastName) {
    if (lastName.value == "") {
        formDataLastName.setAttribute(
            "data-error",
            "Veuillez saisir votre nom."
        );
        formDataLastName.setAttribute("data-error-visible", "true");
        return false;
    } else if (lastName.value.length < 2) { 
          formDataLastName.setAttribute(
              "data-error",
              "Veuillez entrer 2 caractères minimum."
          );
          formDataLastName.setAttribute("data-error-visible", "true");
          return false;
    } else {
        document.getElementById("last-name").style.border = "3px solid green";
        formDataLastName.removeAttribute("data-error");
        formDataLastName.removeAttribute("data-error-visible");
        return true;
    }
  }
  function validateEmail(email) {
      if (email.value == "") {
          formDataEmail.setAttribute(
              "data-error",
              "Veuillez saisir votre adresse email."
          );
          formDataEmail.setAttribute("data-error-visible", "true");
          return false;
      } else if (!/^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/.test(email.value)) { 
          formDataEmail.setAttribute(
              "data-error",
              "Veuillez entrer une adresse email valide."
          );
          formDataEmail.setAttribute("data-error-visible", "true");
          return false;
      } else {
          document.getElementById("email").style.border = "3px solid green";
          formDataEmail.removeAttribute("data-error");
          formDataEmail.removeAttribute("data-error-visible");
          return true;
      }
  }
  function validateMessage(message) {
    if (message.value == "") {
        formDataMessage.setAttribute(
            "data-error",
            "Veuillez saisir votre adresse message."
        );
        formDataMessage.setAttribute("data-error-visible", "true");
        return false;
    } else {
        document.getElementById("message").style.border = "3px solid green";
        formDataMessage.removeAttribute("data-error");
        formDataMessage.removeAttribute("data-error-visible");
        return true;
    }
}

  function validate() {
    let isFormValid = [];
    isFormValid.push(validateFirstName(firstName)); 
    isFormValid.push(validateLastName(lastName)); 
    isFormValid.push(validateEmail(email)); 
    isFormValid.push(validateMessage(message)); 
    
    if (!isFormValid.includes(false)) { 
        form.style.display = "none"; 
        formName.style.display = "none"; 
        confirmationMsg[0].style.display = "block"; 
    } 
}
