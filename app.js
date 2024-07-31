//task 1
document.write(`<h1> Task 1</h1>`);
let firstname = prompt("Enter your Firstname ");
let lastname = prompt("Enter your lastname");
document.write(`Hello <b>${firstname}${lastname}</b> welcome to our site`);
//task 2
document.write(`<h1> Task 2</h1>`);
let mobile = prompt("enter your favorite mobile phone");
let length = mobile.split("").length;
document.write(`My fav mobile phone is ${mobile} <br> length of string = ${length}`);
//task 3
document.write(`<h1> Task 3</h1>`);
let country = "Pakistani";
let index = country.indexOf("n")
document.write(`String : ${country} <br> index of n = ${index}`)
//task 4
document.write(`<h1> Task 4</h1>`)
let message = "Hello world"
let index1 = message.lastIndexOf("l")
document.write(`string : ${message} <br> last index of l = ${index1}`)
//task 5
document.write(`<h1> Task 5</h1>`)
let contry = "Pakistani"
let index3 = contry.charAt(3)
document.write(`String : ${contry} <br> Character at 3 = ${index3} `)
//task 6 
document.write(`<h1> Task 6</h1>`)
let city = "Hadrabad" 
let replacecity =city.replace("Islamabad")  
document.write(`City <b>${city}</b> <br> after replacement <b>${replacecity}</b>`)


