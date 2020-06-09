window.alert("Hello, world! "); //Using the window.alert() method

document.write("Hello, world! "); //Using the document.write() method

var A = "Hi! "; //Naming a variable 'A' and assigning a string value of "Hi!" it
var A = A.fontcolor("blue"); //Using the fontcolor method on the string variable named 'A' to display the string green 
document.write(A); //Using the document.write() method to work with the variable 'A'

var B = "Hello everyone. " //Naming a variable 'B' and assigning it the value of "Hello everyone"
var C = "My name is Kirk! " //Naming a variable 'C' and assigning it the value of "My name is Kirk!"
document.write(B + C); //Using the document.write method with parameters of the variables 'B' and 'C' and then concatenating their string values together

var myVariable = "Hey ya\'ll!"; //Using a forward-slash to incorporate an apostraphe within a string value
window.alert(myVariable); //Using the window.alert() method with the parameter of variable 'myVariable'

var D = "Hello everyone. " + "I think you are all awesome! "; //Creating a variable named 'D' and assigning it two string values to be concatenated
var D = D.fontcolor("red"); //Changing the fontcolor of variable 'D' to red, by using the fontcolor() method 
document.write(D); //Using document.write() method with the variable 'D'.

var family = "Hiltons", dad = "Kirk", mom = "Steph", daughter1 = "Brighton", daughter2 = "Lily "; //Assigning multiple variables with one statement
var family = family.fontcolor("green"), dad = dad.fontcolor("red"), mom = mom.fontcolor("blue"), //changing the color of each variable within the statement
    daughter1 = daughter1.fontcolor("red"), daughter2 = daughter2.fontcolor("green"); //more changed variables within the single statement
document.write(daughter2); //Using document.write() method with the parameter value of 'daughter2' to display the name 'Lily' in green

document.write(3+3); //Writing an expression within a statement to display the value of '6' on the screen.