$(document).ready(function() {
  $("form").submit(function(event) {
    var inputs = ["item1", "item2", "item3"];
    var array = inputs.map(function(input) {
      return $("input#" + input).val();
    });
    console.log(array);
    array.sort();
    event.preventDefault();
    console.log(array);
    var upperCaseArray = array.map(function(input) {
      return input.toUpperCase();
    });
    console.log(upperCaseArray);
    upperCaseArray.forEach(function(input) {
      $("ul").append("<li>" + input + "</li>");
    });
    $("form").hide();
  });
});
