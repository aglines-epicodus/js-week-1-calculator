(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(variable1, variable2, symbol) {
  this.variable1 = variable1;
  this.variable2 = variable2;
  this.symbol = symbol;
}

Calculator.prototype.Compute = function() {
  output = 4;

  return output;
}

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
