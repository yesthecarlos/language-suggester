$(document).ready(function () {
$("form#formOne").submit(function(event) {
  const zodiac = $("input:radio[name=zodiac]:checked").val();
  const usernameInput = $("input#username").val();
console.log(zodiac);
$(".username").append(usernameInput);

$("#output").show();
  event.preventDefault();
});
});