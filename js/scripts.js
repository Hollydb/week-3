//Front End

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var num = parseInt($("input#input").val());
    // var num = userInput.split("");
    var output = beepBoop(num);
    console.log(num);

    $('#output').text(output);
  });
});


//Business Logic:


var beeps = [
  [1,"Beep"],
  [2,"Boop"],
  [3,"I'm sorry Dave, I cant do that."],
  ];


function beepBoop(num){
  if (num === 0){
    return '';
  }
  for (var i = 0; i < beeps.length; i++ ){
    if (num = beeps[i][0]){
      return beeps [i][1];

    }
  }
}

