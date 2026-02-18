// Runs code when DOM ready (HTML structure built)
$(document).ready(function () {
  // Runs this code when the user hits submit
  $("#form").on("submit", function (e) {
    e.preventDefault(); // Prevents server from refreshing before validating data

    // Checks if the data input into the fields are valid
    if (validateForm()) {
      // If the data is valid:
      $("#errorMsg").hide(); // Hides the error message
      // Provides data in console (F12) for reference purposes
      console.log("Validation passed!");
      console.log("Username: ", $("#username").val());
      console.log("Email: ", $("#email").val());
      console.log("Gender: ", $("#gender").val());
      console.log("Age: ", $("#age").val());
      console.log("Date of birth: ", $("#DOB").val());

      // Success message fades in, stays for 2 seconds, fades out and runs function once animation done
      $("#successMsg")
        .fadeIn()
        .delay(2000)
        .fadeOut()
        .promise()
        .done(function () {
          $("#form")[0].reset(); // Resets the form (index 0 because it's the first form in the page)
          $(".inputForm").removeClass("valid invalid"); // Removes class for validity (valid/invalid)
        });
    }
  });

  // Instant validation allows user to recognize invalid fields before completing the form
  // Uses keyup (keyboard button released) and change (input value changes drastically e.g., dropdown) interactions on the 5 fields
  $("#username, #email, #age, #gender, #DOB").on("keyup change", function () {
    validateForm(); // Runs function everytime one of the two interactions occur
  });
});

function errorMessage(isValid, ID, errorMsg) {
  // Prevents redundant code, combines "#" with the ID passed through the function parameter
  let input = $("#" + ID);
  // Prevents redundant code, combines "#" with the ID passed through the function parameter and "Error" to take the ID of each field's span
  let errorSpan = $("#" + ID + "Error");

  if (isValid) {
    // If the field is valid:
    input.removeClass("invalid").addClass("valid"); // Change class from invalid to valid
    errorSpan.text(""); // Leave the error message empty
  } else {
    // If the field is invalid:
    input.removeClass("valid").addClass("invalid"); // Change class from valid to invalid
    errorSpan.text(errorMsg); // Insert error message
  }
}

// Validation function
function validateForm() {
  // Takes the value for all 5 fields by using the ID to check the value
  let username = $("#username").val();
  let email = $("#email").val();
  let gender = $("#gender").val();
  let age = $("#age").val();
  let DOB = $("#DOB").val();

  // Prevents from filling in a username less than 8 characters long
  let usernameValidity = username.length >= 8;

  // Prevents from filling in an invalid email format
  let emailValidity = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Prevents from leaving field empty
  let genderValidity = gender !== "" && gender !== null;

  // Prevents from leaving field empty, filling in a negative value, or a value beyond 120 (not logical)
  let ageValidity = age !== "" && age >= 0 && age <= 120;

  let today = new Date().toISOString().split("T")[0];
  // Grabs data from computer using new Date()
  // Converts date to standardized ISO format using toISOString()
  // Splits string in half at the letter 'T', separating date from time, using split("T")
  // Grabs the first part of the cut (index 0) using [0]

  // Prevents from entering any future dates (not logical)
  let DOBValidity = DOB !== "" && DOB <= today;

  // Runs the error message function for each field
  errorMessage(usernameValidity, "username", "Minimum 8 characters required.");
  errorMessage(emailValidity, "email", "Invalid email format.");
  errorMessage(genderValidity, "gender", "Field empty.");
  errorMessage(ageValidity, "age", "Invalid age.");
  errorMessage(DOBValidity, "dob", "Invalid date.");

  // Function returns the validity of each of the 5 fields
  return (
    usernameValidity &&
    emailValidity &&
    genderValidity &&
    ageValidity &&
    DOBValidity
  );
}
