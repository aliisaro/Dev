const bcrypt = require("bcrypt");

// Function to hash a password
async function hashPassword() {
  const password = "verySecurePassword"; // Replace with your password

  try {
    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Password:", password);
    console.log("Salt:", salt);
    console.log("Hashed Password:", hashedPassword);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to hash the password
hashPassword();

// Function to compare a password with a hash
async function comparePassword() {
  const inputPassword = "verySecurePassword"; // Replace with the password you want to compare
  const hashedPassword =
    "$2b$10$I2YZJ1qrYCNGalne/CTXvOKrQ9SAjILlPeWZJRjNTzCaUcCTzYXcK"; // Replace with a hashed password stored in your application

  try {
    // Compare the input password with the stored hashed password
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

    if (isMatch) {
      console.log("Password is correct.");
    } else {
      console.log("Password is incorrect.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to compare the password
comparePassword();
