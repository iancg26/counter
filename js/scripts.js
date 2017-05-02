$(document).ready(function() {
$("form#sentence1").submit(function(event) {
  event.preventDefault();

// -create variable to gather sentence string
var sentence = $("input#sentence").val();

// -convert sentence string to array using variablename"call it whatever you want".split(''); and place array in new variable.
var sentenceArray = sentence.split('');

// -now we have two variables, sentence and sentenceArray
    // console.log(sentenceArray);
// Starting at the first element of the array, go through one at a time looking for vowels
// IF that element is a vowel, replace it with a "-";
// "var index = 0" is where we begin.
// "index < sentenceArray.length" is how many times we do this. "this" refers to EVERYTHING inside the {}.
// "index= index + 1" is what we increment by aka one at a time
// -go through array with for loop
for (var index = 0; index < sentenceArray.length; index = index + 1){
// -on each letter, check if it is a vowel
  if(sentenceArray[index] === "a" || sentenceArray[index] === "e" || sentenceArray[index] === "i"
    || sentenceArray[index] === "o" || sentenceArray[index] === "u") {
      // -if it is, replace with "-"
      sentenceArray[index] = "-";
    }
}
// -finally, print sentence to screen
    $("#output").append(sentenceArray);
  });

});



//NOTES
// sentenceArray is the whole array
// sentenceArray[index] is the individual array at "index"
//
// if sentenceArray is a vowel{
//     replace with dash
// }
