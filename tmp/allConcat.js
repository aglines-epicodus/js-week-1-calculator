var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var user_input = $('#user_input').val();
    var user_input2 = $('#user_input2').val();
    var symbol = $('#symbol').val();
    var testCalculator = Calculator(user_input, user_input2, symbol);
    var output = testCalculator.Compute();
    console.log(output);
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
