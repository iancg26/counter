$(document).ready(function() {
$("form#add").submit(function(event) {
  event.preventDefault();

var condition = parseInt($("#add1").val());
var increment = parseInt($("#add2").val());
var count = 0;
for (var index = 0; index < condition; index += increment){
  count = count + 1;
  $("#output").append("<p>" + index + "</p>");
}
  });
});
