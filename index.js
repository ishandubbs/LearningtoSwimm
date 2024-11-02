document.addEventListener('DOMContentLoaded', () => {
  
  // Toggle dark mode functionality (optional)
  let themeButton = document.getElementById('theme-button');
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  }
  if (themeButton) {
    themeButton.addEventListener('click', toggleDarkMode);
  }

  // Initialize the count with 3 default signatures
  let count = 3;

  // Query the button for signing the petition
  const signNowButton = document.getElementById('sign-now-button');

  // Add the function that adds a signature
  const addSignature = () => {
    // Step 1: Get the input values (name, hometown, favorite stroke)
    const name = document.getElementById('name').value;
    const hometown = document.getElementById('hometown').value;
    const favorite_stroke = document.getElementById('favorite_stroke').value;
    const email = document.getElementById('email').value;

    // Step 2: Create a new paragraph element for the signature
    const newSignature = document.createElement('p');

    // Step 3: Format the signature using the input values
    newSignature.textContent = `${name} from ${hometown} has signed the petition. Their favorite stroke is ${favorite_stroke}.`;

    // Step 4: Find the section where signatures are displayed
    const signaturesSection = document.getElementById('signatures');

    // Step 5: Append the new signature to the signatures section
    signaturesSection.appendChild(newSignature);

    // Step 6: Remove the old counter if it exists
    const oldCounter = document.getElementById('counter');
    if (oldCounter) {
      oldCounter.remove();
    }

    // Step 7: Increment the count since a new signature has been added
    count = count + 1;

    // Step 8: Create a new counter HTML p tag and set its id to 'counter'
    const newCounter = document.createElement('p');
    newCounter.id = 'counter';
    newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    // Step 9: Append the new counter to the signatures section
    signaturesSection.appendChild(newCounter);
  }

  // Add event listener to the "Sign Now" button
  signNowButton.addEventListener('click', validateForm);
});

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

let containsErrors = false;

let petitionInputs = document.getElementById("sign-petition").elements;
// TODO: Loop through all inputs
for (let i = 0; i < petitionInputs.length; i++) {
  if (petitionInputs[i].value.length < 2) {
    petitionInputs[i].classList.add('error');
    containsErrors = true;
  }

  else {
    petitionInputs[i].classList.remove('error');
  }

if (containsErrors == false) {
  addSignature();

  for (let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
  }

  containsErrors = false;
  }

}

const email = document.getElementById('email');

if (!email.value.includes('.com')) {
  containsErrors = true;
  email.classList.add('error');

}
else {
  email.classList.remove('error');
}


// TODO: Call addSignature() and clear fields if no errors
signNowButton.addEventListener('click', validateForm);
}

