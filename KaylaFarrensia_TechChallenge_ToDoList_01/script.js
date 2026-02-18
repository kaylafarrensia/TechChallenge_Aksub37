/* Runs code when DOM ready (HTML structure built) */
$(document).ready(function () {
  /* Runs code when user clicks the "+" icon (add to do) */
  $(document).on("click", "#addToDo", function () {
    /* Assigns userText with the value of to-do (user input) */
    var userText = $("#to-do").val();
    /* If the input is empty, return */
    if (userText == "") return;
    /* Creates a string of HTML to insert userText */
    var taskHTML = `<div class="taskItem"><input type="checkbox" class="taskCheckbox" />
                    <span class="taskText">${userText}</span><button class="delete">🗑️</button></div>`;

    /* Appends the task to the task list */
    $(".taskList").append(taskHTML);
    /* Resets the input field to an empty string */
    $("#to-do").val("");
  });

  /* Runs code when user clicks the trash icon (delete to do) */
  $(document).on("click", ".delete", function (e) {
    e.preventDefault(); /* Prevents default behavior, stops refresh */
    $(this)
      .parent() /* Selects the container */
      .fadeOut(300, function () {
        /* To do fades out for 300 ms */
        $(this).remove(); /* Removes to do after fading */
      });
  });
});
