themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");

}


themeButton.addEventListener("click", toggleDarkMode);


// Query for the sign now button
const signNowButton = document.querySelector('#sign-now-button');

let signatureCount = 3;

// Define the addSignature function
const addSignature = () => {
  // Get the input fields
  const nameInput = document.querySelector('#name');
  const hometownInput = document.querySelector('#hometown');
  const emailInput = document.querySelector('#email');

  // Get the values from the input fields
  const name = nameInput.value;
  const hometown = hometownInput.value;
  const email = emailInput.value

  // Create a new paragraph element
  const signatureElement = document.createElement('p');

  // Set the text content of the new element
  signatureElement.textContent = `🖊️ ${name} from ${hometown} supports this.`;

  // Find the signatures section on the page
  const signaturesSection = document.querySelector('.signatures');

  // Add the new signature element to the signatures section
  signaturesSection.appendChild(signatureElement);

  // Remove the old signature counter
  const oldSignatureCounter = signaturesSection.querySelector('#signature-counter');
  if (oldSignatureCounter) {
    oldSignatureCounter.remove();
  }

  // Increment the signature count
  signatureCount++;

  // Create a new paragraph element for the signature count
  const signatureCounter = document.createElement('p');

  // Set the text content of the new element
  signatureCounter.textContent = `🖊️ ${signatureCount} people have signed this petition and support this cause.`;

  // Set the id of the new element
  signatureCounter.id = 'signature-counter';

  // Add the new signature counter to the signatures section
  signaturesSection.appendChild(signatureCounter);

};

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.hometown.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // TODO: Validate the value of each input
const email = document.getElementById('email');
if (!email.value.includes('.com')) {
  containsErrors = true;
  email.classList.add('error');
}  else {
      email.classList.remove('error');
  }

  // TODO: Call addSignature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  } else {
    petitionInputs[i].classList.add('error');
  }



}

signNowButton.addEventListener('click', validateForm);

// Add a click event listener to the sign now button