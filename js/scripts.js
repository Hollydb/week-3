//Front End

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userInput =$("input#input").val();
    var num = userInput.split("");
    var output = beepBoop(num);
    console.log(num);

    $('#output').append(output);
  });
});


//Business Logic:


// var beeps = [
//   [1,"Beep"],
//   [2,"Boop"],
//   [3,"I'm sorry Dave, I cant do that."],
//   ];


// function beepBoop(num){
//   for (var i = 0; i < beeps.length; i++ ){
//     if (num === beeps[i][0]){
//       return beeps [i][1];

//     }
//   }
// }



function beepBoop(num){
  for (var i=1; i < 101; i++ ){
    if (num == "1"){
      return ("Beep");
    } else if (num == "2"){
      return ("Boop");
    } else if (num == "3"){
      return ("Im sorry Dave, I can't do that");
    } else {
      return [num];
    }
  }
}

