
// // //Front End

$(document).ready(function() {

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var num =parseInt($("input#input").val());
    var output = printNum(num);
    var final = beepBoop(num);
    // console.log(num);

    $('#output').append(" " + numArray + " ");
  });
});


// // // //Business Logic:
var numArray = [];

var outputArray = [];


function printNum(num){
  for (var i=0; i<num; i++){
      outputArray.push(i);
  }
}


function beepBoop(num){
  for (var i=0; i<outputArray.length; i++ ){
    if (outputArray[i].toString().includes("3")){
      numArray.push("I'm sorry Dave I can't do that");
    } else if (outputArray[i].toString().includes("2")){
      numArray.push("Boop");
    } else if (outputArray[i].toString().includes("1")){
      numArray.push("Beep");
    } else {
      numArray.push(i);
    }
  }
}









