### Why does JavaScript output undefined instead of throwing an error in the following code?

console.log(message);

var message = 'Hi there!';

### Answer:

The var "message" is declared and hoisted to the top of it's scope before the code is executed, but it's defined after logging to the console. However the variable can still be accessed despite not being defined, so it results in "undefined".


### Why does JavaScript throw an error instead of logging undefined in the following code?

console.log(message);

let message = 'Hi there!';

### Answer

When declaring "let" variables, it is hoisted to the top but cannot be accessed before it has been defined, which means that the result is "ReferenceError".


### Explain precisely what happens when the following code is executed.

console.log(showMessage());

const showMessage = function(){
  return 'Hi there!';
};

### Answer
In this code "showMessage" is a "function expression", which means that the function is assigned to a variable. The code is trying to log the result of the the function before it has been assigned to a variable which will result in a ReferenceError.

### Why does JavaScript not throw any errors when the following code is executed?

console.log(showMessage());

function showMessage(){
  return 'Hi there!';
}

### Answer

It doesn't give any errors because the result of the "function declaration" is hoisted to the top of the code, which means that it can be called without issues.