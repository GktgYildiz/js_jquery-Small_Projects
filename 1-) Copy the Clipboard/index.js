$(document).ready(function() {
  function add() {
    $(".copied").addClass("bounce-effect");
  }

  function remove() {
    $(".copied").removeClass("bounce-effect");
  }

  $(".copy-btn").click(function() {
    const textField = document.getElementById("textfield");
    textField.select();

    navigator.clipboard.writeText(textField.value).then(function() {
      add();
      setTimeout(remove, 1000);
    });
  });
});