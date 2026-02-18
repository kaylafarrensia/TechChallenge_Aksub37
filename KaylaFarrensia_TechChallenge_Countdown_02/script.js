$(document).ready(function () {
  // Runs code when DOM ready (HTML structure built)
  // Assigns the date the browser is counting down towards
  const targetDate = new Date("Aug 1, 2026 03:25:00").getTime();

  const countdown = setInterval(function () {
    // Takes the current date and time
    const now = new Date().getTime();
    // Calculates the difference between now and the target date
    const interval = targetDate - now;

    // Calculates the amount of days, hours, minutes, and seconds left towards the target date
    // Floors values = Rounds down float or double to integer
    const days = Math.floor(interval / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((interval % (1000 * 60)) / 1000);

    // Replaces days, hours, minutes, and seconds with the results of the calculations
    // Specifically for hours, minutes, and seconds, since it can only either be 1 or 2 digits:
    // If it is 1 digit (value < 10) then add a "0" in front of it, otherwise don't
    $("#days").text(days);
    $("#hours").text(hours < 10 ? "0" + hours : hours);
    $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
    $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);

    // If it is in the last minute:
    if (days == 0 && hours == 0 && minutes == 0 && seconds <= 60) {
      $(".timeBlock span").addClass("urgent"); // Adds class called urgent in CSS to add a red glow to the time
    } else {
      // Otherwise:
      $(".timeBlock span").removeClass("urgent"); // Removes class called urgent (no red glow)
    }

    // If the time is up:
    if (interval < 0) {
      clearInterval(countdown); // Clears the time
      $(".countdownRow").html("<h4>🌟Countdown Finished!🌟</h4>"); // Adds a message to indicate completion
      // Changes the container and text to a different color by assigning a class from CSS
      $(".container").addClass("containerAfter");
      $(".countdownRow").addClass("textAfter");
      $(".header").addClass("textAfter");
    }
  }, 1000);
});
