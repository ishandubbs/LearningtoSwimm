document.addEventListener('DOMContentLoaded', () => {

  // Toggle dark mode functionality (optional)
  let themeButton = document.getElementById('theme-button');
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  if (themeButton) {
    themeButton.addEventListener('click', toggleDarkMode);
  }

  // Initialize the count with 3 default signatures
  let count = 3;

  // Query the button for signing the petition
  const signNowButton = document.getElementById('sign-now-button');

  // Add the function that adds a signature
  const addSignature = (person) => {
    // Step 1: Get the input values (name, hometown, favorite stroke)
    const name = document.getElementById('name').value;
    const hometown = document.getElementById('hometown').value;
    const favorite_stroke = document.getElementById('favorite_stroke').value;
    const email = document.getElementById('email').value;

    // Step 2: Create a new paragraph element for the signature
    const newSignature = document.createElement('p');

    // Step 3: Format the signature using the input values
    newSignature.textContent = `${person.name} from ${person.hometown} has signed the petition. Their favorite stroke is ${person.favorite_stroke}.`;
    toggleModal(person);
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
    console.log("Debug, addSignature");
  };
  // TODO: Remove the click event listener that calls addSignature()

  // TODO: Complete validation form

  const validateForm = () => {

    let containsErrors = false;

    let petitionInputs = document.getElementById("sign-petition").elements;

    let person = {
      name: petitionInputs[0].value, // accesses and saves value of first input
      hometown: petitionInputs[1].value, // accesses and saves value of second input (hometown)
      favorite_stroke: petitionInputs[2].value
    };
    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {
      if (petitionInputs[i].value.trim() === "") {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      } else {
        petitionInputs[i].classList.remove('error');
      }
    }
    if (containsErrors == false) {
      addSignature(person);

      for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = "";
      }
    }

  

  const email = document.getElementById('email');

  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
}

  // TODO: Call addSignature() and clear fields if no errors
  // Here, the event listener is outside of the function but still within the scope of DOMContentLoaded
if (signNowButton) {
  signNowButton.addEventListener('click', validateForm);
}
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '1s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const revealableContainers = document.querySelectorAll(".revealable");

function reveal() {
  // Get the height of the window for reference
  let windowHeight = window.innerHeight;

  // Loop through each revealable container
  revealableContainers.forEach(container => {
    // Get the distance from the top of the viewport to the element's top
    let topOfContainer = container.getBoundingClientRect().top;

    console.log(`Element top: ${topOfContainer}, Window height: ${windowHeight}`);

    // Check if the element is within the reveal distance from the viewport
    if (topOfContainer < windowHeight - 150) {
      container.classList.add('active');
      console.log("Added active class");
    } else {
      container.classList.remove('active'); // removes the class if out of view
      console.log("Removed active class");
    }
  });
}

const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");

  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name} for filling out the form!`;

  let interValid = setInterval(scaleImage, 500);

  setTimeout(() => {
    clearInterval(interValid);
    modal.style.display = "none";
  }, 4000);
}

let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }

  modalImage.style.transform = `scale(${scaleFactor})`;
}

const closeModalButton = document.getElementById("close-modal-button")

function hideModal() {
  const modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}

closeModalButton.addEventListener("click", hideModal);
// Attach the reveal function to the scroll event
window.addEventListener('scroll', reveal);

// Run the reveal function once to check initial visibility on load
reveal();
});