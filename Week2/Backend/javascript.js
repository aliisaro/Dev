//PART 1 TEMPLATE LITERALS
const myName = "Aliisa";
const message = `Hello, my name is ${myName}.`;
console.log(message); 


//Part 2: JSON vs JavaScript Objects
const person = { name: "John", age: 25, email: "john@example.com" };
const jsonPerson = JSON.stringify(person)
console.log(jsonPerson);

const jsonString = '{"name": "Alice", "age": 30, "email": "alice@example.com"}';
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);


//PART 3
const firstName = "John";
const lastName = "Doe";
const address = `123 Main Street
Apt 4B
City: Example`;

const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

const userJSON = '{"name": "Emily", "age": 25, "city": "San Francisco"}';
const parsed = JSON.parse(userJSON);
const userName = parsed.name;

const product = { name: "Product A", price: 15.99, category: "Electronics" };
const jsonProduct = JSON.stringify(product)

const orders = [
    { orderID: 1, product: "Widget", quantity: 5 },
    { orderID: 2, product: "Gadget", quantity: 3 },
  ];

const jsonOrders = JSON.stringify(orders);


