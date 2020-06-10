function addFunction() { //Create function called 'addFunction()'
    var add = 2 + 2; //Create variable of 'add' and assign value of 2 + 2. Utilize + operator
    document.getElementById("plus").innerHTML = "2 + 2 = " + add; //Use getElementById to send the value of variable 'add' when called by the HTML code
}

function subtractFunction() { //Create subtractFunction
    var subtraction = 5 - 3; //Create variable 'subtraction' and assign value of 5 - 3. Utilize - operator
    document.getElementById("minus").innerHTML = "5 - 3 = " + subtraction; //Use getElementById to send the value of variable 'subtraction' when called by the HTML code
}

function multiplyFunction() { //Create function called 'multiplyFunction()'
    var multiplication = 5 * 5; //Create variable 'multiplication' and assign it a value using the * operator of 5 * 5
    document.getElementById("times").innerHTML = "5 x 5 = " + multiplication; //Use getElementById to send the value of variable 'multiplication' when called by the HTML code
}

function divideFunction() { //Create function called 'divideFunction()'
    var division = 15 / 3; //Create variable named 'division' and assig it a value using the / operator of 15 / 3.
    document.getElementById("divide").innerHTML = "15 / 3 = " + division; //Use getElementById to send the value of variable 'division' when called by the HTML code
}

function moreMathFunction() { //Create function called 'moreMathFunction()'
    var many = (1+2) * 10 / 2 - 5; //Create variable named 'many' and using multiple operators assigned it a value of (1+2) * 10 / 2 - 5.
    document.getElementById("lots").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + many; //Use getElementById to send the value of variable 'many' when called by the HTML code
}

function modulusFunction() { //Create function called 'modulusFunction()'
    var remainder = 25 % 6; //Create variable named 'remainder' and use the modulus operator to assign it a value of 25 % 6.
    document.getElementById("modulus").innerHTML = "(25 / 6) = 5 remainder " + remainder; //Use getElementById to send the value of variable 'remainder' when called by the HTML code
}

function negationFunction() { //Create function called 'negationFunction()'
    var x = 50; //Create variable 'x' and assign it a value of 50.
    document.getElementById("negate").innerHTML = -x; //Use getElementById to send the negated value of variable 'x' when called by the HTML code.
}

function incrementFunction() { //Create function called 'incrementFunction()'
    var x = 10; //Create variable 'x' and assign it a value of 10
    x++; //Applying the increment operator to the variable x
    document.getElementById("increment").innerHTML = x; //Use getElementById to send the incremented value of variable 'x' when called by the HTML code
}

function decrementFunction() { //Create function called 'decrementFunction()'
    var x = 10 //Create variable 'x' and assign it a value of 10.
    x--; //Applying the decrement operator to the variable x.
    document.getElementById("decrement").innerHTML = x; //Use getElementById to send the decremented value of variable 'x' when called by the HTML code
}

window.alert(Math.random() * 100); //Utilize window.alert and Math.random methods to display a random number between 0 and 100 in a pop-up window

function randomFunction() { //Create function called 'randomFunction()'
    var x = Math.random(); //Create variable 'x' and assign it a value using the Math.random() method.
    document.getElementById("random").innerHTML = x; //Use getElementById to send the value of variable 'x' when called by the HTML code
}

function roundupFunction() { //Create function called 'roundupFunction'
    var x = document.getElementById("roundup"); //Assign variable x to the value 'document.getElementById("roundup")
    x.innerHTML = Math.round(4.5); //Using 'innerHTML' on the variable X and assign it with the 'Math.round' method and an argument of 4.5
}
