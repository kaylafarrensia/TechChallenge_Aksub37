$(document).ready(function () {
  // Runs code when DOM ready (HTML structure built)
  // When there is change on switch (button clicked) the function runs
  $("#switch").on("change", function () {
    // Toggles the CSS class
    // Adds class if nonexistent, removes if it exists
    $("body").toggleClass("darkMode");

    // Update the text label based on the state: dark mode or light mode
    // If checked (checkbox bool status true) then show dark mode, otherwise light mode
    $("#modeText").text($(this).is(":checked") ? "Dark Mode" : "Light Mode");
  });
});
