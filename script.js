// Concatenate Some Strings
document.getElementById("Concatenate Some Strings").onclick = function(){
    let message = "Good boy";
    let name = "Shahzaib";
    let banger = "!";
    let concatenate = message + name + banger;

    document.getElementById("statement").innerHTML = `message = ${message} <br/> name = ${name}<br/> banger = ${banger}`;
    document.getElementById("output").innerText = `${concatenate}`;
}
// Ask Name From User(#chap 9-10 Promts and if statements)
document.getElementById("Ask Name From User").onclick = function() {
    let firstName = prompt("Please enter your first name:");
    let lastName = prompt("Please enter your last name:");
    let fullName = firstName + " " + lastName;

    document.getElementById("statement").innerHTML = `First Name: ${firstName} <br/> Last Name: ${lastName}`;
    document.getElementById("output").innerText = `Full Name: ${fullName}`;
};
// Comparison Operators
document.getElementById("Comparison Operators").onclick = function() {
    let num = prompt("Please enter your number:");
    document.getElementById("statement").innerHTML = `num = ${num}`;
    if (num == 0) {
        document.getElementById("output").innerText = `num is equal to 0: ${num}`;
    } else {
        document.getElementById("output").innerText = `num is not equal to 0 =  ${num}`;
    }
};
// if else if
document.getElementById("if else if").onclick = function() {
    let number = prompt("Please enter a number:");

    if (number > 0) {
        document.getElementById("output").innerText = "The number is positive.";
    } else if (number < 0) {
        document.getElementById("output").innerText = "The number is negative.";
    } else {
        document.getElementById("output").innerText = "The number is zero.";
    }
};
// Testing Sets of Conditions
document.getElementById("Testing Sets of Conditions").onclick = function() {
    let age = prompt("Please enter your age:");
    let hasLicense = confirm("Do you have a driver's license?");

    if (age >= 18 && hasLicense) {
        document.getElementById("output").innerText = "You are eligible to drive.";
    } else if (age < 18 && !hasLicense) {
        document.getElementById("output").innerText = "You are not old enough to drive and you don't have a license.";
    } else if (age < 18 && hasLicense) {
        document.getElementById("output").innerText = "You are not old enough to drive, but you have a license.";
    } else {
        document.getElementById("output").innerText = "You are old enough to drive, but you don't have a license.";
    }
};
// if Statements Nested
document.getElementById("if Statements Nested").onclick = function() {
    let temperature = prompt("Please enter the temperature:");

    if (temperature > 30) {
        if (temperature <= 40) {
            document.getElementById("output").innerText = "It's hot outside.";
        } else {
            document.getElementById("output").innerText = "It's very hot outside.";
        }
    } else {
        document.getElementById("output").innerText = "It's not too hot outside.";
    }
};
// Login
document.getElementById("Login").onclick = function() {
    // Prompt the user to enter username and password
    let username = prompt("Please enter your username:");
    let password = prompt("Please enter your password:");

    // Check if the username and password are valid
    if (username === "admin" && password === "password") {
        document.getElementById("output").innerText = `username = Login successful! Welcome, ${username}!`;
    } else {
        document.getElementById("output").innerText = `password = Invalid username or password. Please try again.`;
    }
};
// clear Statement
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerText = ""
}
// clear Statement
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerText = ""
}







