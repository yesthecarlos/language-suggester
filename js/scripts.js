$(document).ready(function () {
  $("form#formOne").submit(function(event) {
    const usernameInput = $("input#username").val();
    const zodiacInput = $("input:radio[name=zodiac]:checked").val();
    const proofreaderInput = $("input:radio[name=proofreader]:checked").val();
    const iosInput = $("input:radio[name=ios]:checked").val();
    const startInput = $("#start").val();
    const puzzleInput = $("input:radio[name=puzzle]:checked").val();
  $(".username").append(usernameInput);
  console.log(zodiacInput);
  console.log(proofreaderInput);
  console.log(iosInput);
  console.log(startInput);
  console.log(puzzleInput);
  $("#output").show();
  event.preventDefault();
  });
});