# Restaurant Booking Form

## Overview
This project is a simple restaurant reservation form built using HTML, CSS, and JavaScript. It allows users to enter their name and phone number, select a dinner time, and choose meal options. The form includes input validation to ensure data is entered correctly before submission.

## Features

- Form Validation:
  - Name must contain at least two words (e.g., first and last name).
  - Phone number must be exactly six characters long and start with a digit.
- Invalid inputs are highlighted with a yellow background and red border.
- Valid inputs reset to a clean white background.
- Users can select a dinner time using radio buttons.
- Users can select multiple meal options using checkboxes.
- Upon submission, a reservation summary message is displayed below the form.

## Files Included

- `index.html` — Main HTML structure of the form.
- `booking.js` — Handles all input validation and form logic.
- `README.md` — Explains the project and its functionality.

## How to Run

1. Open the project folder (`restaurant_booking_app`) in Visual Studio Code.
2. Open `index.html` using Live Server or by double-clicking the file to open it in a browser.
3. Test the form by entering values and clicking submit once all inputs are valid.

## Validation Logic Explained

- Name Validation: Uses a regular expression to ensure the input has at least two non-space words.
- Phone Validation: Checks that the input is 6 characters long and starts with a digit using a regular expression.
- Submit Button: Remains disabled until both fields are valid.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## Author

Created by Austn w. Davis for Test 2 and Acedemic Purposes.

## Acknowledgments

- Google was used to research regular expressions and JavaScript syntax examples.
- ChatGPT was used to explain validation logic, assist in debugging code, and structure the form functionality.
- Quizlet was used for reviewing related concepts in JavaScript validation and form inputs.

