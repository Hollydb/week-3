// // //Front End

// $(document).ready(function() {

//   $("form#formOne").submit(function(event){
//     event.preventDefault();
//     var num =parseInt($("input#input").val());
//     var output = beepBoop(num);
//     // console.log(num);

//     $('#output').append(" " + numArray + " ");
//   });
// });


// // // //Business Logic:
// var numArray = [];

// function beepBoop(num){
//   for (var i=1; i<=num; i++ ){
//     if (i == "1"){
//       console.log("Beep");
//       numArray.push('beep');
//     } else if (i == "2"){
//       console.log("Boop");
//       numArray.push('boop');
//     } else if (i == "3"){
//       console.log("I'm sorry Dave, I can't do that");
//       numArray.push("I'm sorry Dave I can't do that");
//     } else {
//       console.log[i];
//       numArray.push(i);
//     }
//   }
// }




// // //Front End

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var num =parseInt($("input#input").val());
    var output = printNum(num);
    var final = beepBoop(num);
    // console.log(num);

    $('#output').append(" " + numArray + " ");
    $('#output2').append(" " + outputArray + " ");
  });
});


// // //Business Logic:
var numArray = [];

var outputArray = [];


function printNum(num){
  for (var i=1; i<=num; i++ ){
      outputArray.push(i);
  }
}


function beepBoop(num){
  for (var i=0; i<=num; i++ ){
    if (outputArray[i] == "0"){
      console.log("Beep");
      numArray.push('beep');
    } else if (outputArray[i] == "1"){
      console.log("Boop");
      numArray.push('boop');
    } else if (outputArray[i] == "2"){
      console.log("I'm sorry Dave, I can't do that");
      numArray.push("I'm sorry Dave I can't do that");
    } else {
      console.log[i];
      numArray.push(i);
    }
  }
}
