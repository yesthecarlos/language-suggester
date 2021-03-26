$(document).ready(function () {
$("form#formOne").submit(function(event) {
  const zodiac = $("input:radio[name=zodiac]:checked").val();
console.log(zodiac);

  event.preventDefault();
});
});