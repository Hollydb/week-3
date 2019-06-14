// //Front End

// $(document).ready(function() {

//   $("form#formOne").submit(function(event){
//     event.preventDefault();
//     var userInput =$("input#input").val();
//     var num = userInput.split("");
//     var output = beepBoop(num);
//     console.log(num);

//     $('#output').append(output);
//   });
// });


// //Business Logic:


// function beepBoop(num){
//   for (var i=1; i < 101; i++ ){
//     if (num == "1"){
//       return ("Beep");
//     } else if (num == "2"){
//       return ("Boop");
//     } else if (num == "3"){
//       return ("Im sorry Dave, I can't do that");
//     } else {
//       return [num];
//     }
//   }
// }



// //Front End

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var num =parseInt($("input#input").val());
    var output = beepBoop(num);
    // console.log(num);

    $('#output').append(" " + numArray + " ");
  });
});


// //Business Logic:
var numArray = [];

function beepBoop(num){
  for (var i=1; i<=num; i++ ){
    if (i == "1"){
      console.log("Beep");
      numArray.push('beep');
    } else if (i == "2"){
      console.log("Boop");
      numArray.push('boop');
    } else if (i == "3"){
      console.log("Im sorry Dave, I can't do that");
      numArray.push("Im sorry Dave, I can't do that");
    } else {
      console.log[i];
      numArray.push(i);
    }
  }
}


numArray.forEach(function(numArray){
  alet (numArray);
});
