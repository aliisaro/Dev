//Refractoring
// 1.
  var cube = function(x) {
    return x * x * x;
  }
  
  // 2.
  var fullname = function(first, last) {
    return first + " " + last;
  }
  
  // 3.
  var power = function(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  }

  // 4.
  var sumCubes = function(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
  }

  //Code restructuring
  // 1.

  var values = [10, 20, 30];

  for(var i = 0; i < values.length; i++){
      console.log(values[i]);
    }
    
  
    // 2.
  console.log(welcome('Charlie', 'Munger'));
  
  function welcome(first, last) {
      var lastLogin = '1/1/1970';
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
  };
