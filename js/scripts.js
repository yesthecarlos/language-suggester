$(document).ready(function () {
  $("form#formOne").submit(function(event) {
    const usernameInput = $("input#username").val();
    const zodiacInput = $("input:radio[name=zodiac]:checked").val();
    const proofreaderInput = $("input:radio[name=proofreader]:checked").val();
    const iosInput = $("input:radio[name=ios]:checked").val();
    const startInput = $("#start").val();
    const puzzleInput = $("input:radio[name=puzzle]:checked").val();
  $(".username").empty().append(usernameInput);
  console.log(zodiacInput);
  console.log(proofreaderInput);
  console.log(iosInput);
  console.log(startInput);
  console.log(puzzleInput);
    let result;
    if (iosInput === "true") {
      result = "Swift";
    } else if (proofreaderInput === "false" && puzzleInput === "true") {
      result = "JavaScript"
    } else if (proofreaderInput === "false" && puzzleInput === "false") {
    result = "Python";
    } else if (proofreaderInput === "true" && puzzleInput === "false") {
      result = "Ruby";
    } else if (proofreaderInput === "true" && puzzleInput === "true") {
      result = "C#";
      }
    
    // else if (startInput > Date(2021, 2, 26) {
    //   result = "Python"
    
    $(".result").empty().append(result);

    $("#output").show();
    event.preventDefault();
  
  });
});