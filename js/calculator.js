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
