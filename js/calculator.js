function Calculator(fakeData) {
  this.fake = fakeData;
  // this.variable1 = variable1;
  // this.variable2 = variable2;
  // this.symbol = symbol;
}

Calculator.prototype.Compute = function(user_input, user_input2, symbol) {
  var output = 0;
  console.log(symbol);
  user_input = parseInt(user_input);
  user_input2 = parseInt(user_input2);
  if(symbol === "1"){
    output = user_input + user_input2;
  }
  else if(symbol === "2"){
    output = user_input - user_input2;
  }
  else if(symbol === "3"){
    output = user_input * user_input2;
  }
  else if(symbol === "4"){
    output = user_input / user_input2;
  }
  else {
    console.log("ERROR")
  }
  return output;
};

exports.calculatorModule = Calculator;
