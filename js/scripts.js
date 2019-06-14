//Front End

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var num = $("input#input").val();
    // var num = userInput.split("");
    var output = getRoman(num)
    console.log(num)

    $('#output').text(output);
  });
});


//Business Logic

