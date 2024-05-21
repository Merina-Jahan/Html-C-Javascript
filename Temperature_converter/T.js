
// Celsius to Fahrenheit

var cels = parseFloat(prompt("Enter Celsius ="));

var farn = (cels * (9/5)) + 32;

document.write("Fahrenheit = " + farn);

// Fahrenheit to Celsius

var farn = parseFloat(prompt("Enter Fahrenheit ="));

var cels = (farn - 32) * (5 / 9);

document.write("Celsius = " + cels);