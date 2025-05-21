// Get references to all necessary elements on the page
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");
const msg = document.getElementById("msg");

// Track whether the name and phone number are valid
let validName = false;
let validPhone = false;

// Validate the name input field
function validateName() {
  const name = nameInput.value.trim();

  // Check if the name field is empty
  if (name === "") {
    nameInput.className = "invalid";
    msg.textContent = "Error: Name is empty.";
    validName = false;
  }
  // Check if the name has at least two words (e.g., first and last name)
  else if (!/^\S+\s+\S+/.test(name)) {
    nameInput.className = "invalid";
    msg.textContent = "Error: First and last name are required.";
    validName = false;
  }
  // If the name is valid, update styling and flags
  else {
    nameInput.className = "valid";
    msg.textContent = ". . .";
    validName = true;
  }

  // Enable or disable the Submit button depending on validity
  toggleSubmit();
}

// Validate the phone number input field
function validatePhone() {
  const phone = phoneInput.value.trim();

  // Check if the phone field is empty
  if (phone === "") {
    phoneInput.className = "invalid";
    msg.textContent = "Error: Phone number is empty.";
    validPhone = false;
  }
  // Ensure the phone number is exactly 6 characters
  else if (phone.length !== 6) {
    phoneInput.className = "invalid";
    msg.textContent = "Error: Phone numbers must have exactly 6 characters.";
    validPhone = false;
  }
  // Ensure the phone number starts with a digit
  else if (!/^[0-9]/.test(phone)) {
    phoneInput.className = "invalid";
    msg.textContent = "Error: Phone number must start with numbers.";
    validPhone = false;
  }
  // If the phone number is valid, update styling and flags
  else {
    phoneInput.className = "valid";
    msg.textContent = ". . .";
    validPhone = true;
  }

  // Enable or disable the Submit button depending on validity
  toggleSubmit();
}

// Enable the submit button only if both name and phone inputs are valid
function toggleSubmit() {
  submitBtn.disabled = !(validName && validPhone);
}

// Add blur event listeners to trigger validation when the user leaves the input field
nameInput.addEventListener("blur", validateName);
phoneInput.addEventListener("blur", validatePhone);

// Handle the submit button click and display the final reservation summary
submitBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Get the selected time radio button value
  const time = document.querySelector('input[name="time"]:checked').value;

  // Collect all selected meal options into a single string
  const meals = Array.from(document.querySelectorAll('input[name="meal"]:checked'))
    .map(cb => cb.value)
    .join(" ");

  // Output the final formatted reservation message
  msg.textContent = `Reservation for: ${name} Phone: (${phone}) at ${time} Starters are: ${meals}`;
});
