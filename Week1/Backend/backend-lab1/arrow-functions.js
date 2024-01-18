const sayHelloArrow = () => "Hello world";


const doubleArrow = (x) => x * 2;


const addArrow = (x, y) => x + y;


const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!" 
};


const numbers = [1, 2, 3, 4, 5];
const doubled = [];

numbers.forEach((num) => {
  doubled.push(num * 2);
});