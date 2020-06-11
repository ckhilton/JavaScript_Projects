function typeof_Function() { //Create function called 'typeof_Function'
    var A = document.getElementById("typeof"); //Create variable 'A' and use getElementById method for it's value 
    A.innerHTML = document.write(typeof "Hello, World!"); //Use innerHTML of variable 'A' (HTML element with ID "typeof") and set the value to display "string" using the 'typeof' operator
}

function infinity_Function() { //Create function called 'infinity_Function'
    var x = 2E310 ; //Create variable 'x' and use document.write method with '+' operator to assign it a value of infinity and -infinity numbers 
document.getElementById("infinity").innerHTML = x; //Use getElementById method to return the computed value of variable 'x' when called by the HTML element with the ID "infinity"
} 

function negative_infinity_Function() { //Create function called 'negative_infinity_Function'
    var x = -3E310 ; //Create variable 'x' and use document.write method with '+' operator to assign it a value of infinity and -infinity numbers 
document.getElementById("negative_infinity").innerHTML = x; //Use getElementById method to return the computed value of variable 'x' when called by the HTML element with the ID "negative_infinity"
} 

//THESE NEXT THREE ARE CHALLENGES FROM STEP 97 **NaN stands for "Not A Number"//
function display_NaN_Function() { //Create function called 'display_Nan_Function()'
    var x = 0 / 0; //Create variable 'x' and give it a non-number value of '0 / 0' 
document.getElementById("NaN").innerHTML = x; //Use getElementById method to return computed value of variable 'x' when called by the HTML element with the ID of "NaN"
}

function isNaN_true_Function() { //Create function called 'isNaN_true_Function()'
    var x = 0 / 0; //Create variable 'x' and give it a non-number value of '0 / 0'.
document.getElementById("isNaN_true").innerHTML = isNaN(x); //Use getElementById method to return the computed value of the isNaN() function upon variable 'x' when called by the HTML element with the ID of "isNaN_true"
}

function isNaN_false_Function() { //Create function called 'isNaN_false_Function()'
    var x = 2 / 1; //Create variable 'x' and give it a non-number value of '2 / 1'.
document.getElementById("isNaN_false").innerHTML = isNaN(x); //Use getElementById method to return the computed value of the isNaN() function upon variable 'x' when called by the HTML element with the ID of "isNaN_false"
}
//END STEP 97 CHALLENGES//

function greater_than_true_Function() { //Create function called 'greater_than_true_Function()'
    var x = (15>14); //Create variable 'x' and assign it a value of the true statement (4>3)
document.getElementById("greater_than_True").innerHTML = x; //Use getElementById method to return the computed value of variable 'x' when called by the HTML element with the ID "greater_than_true_Function"
}

function less_than_false_Function() { //Create function called 'less_than_false_Function() '
    var x = (4<3); //Create variable 'x' and assign it a value of the false statement (4<3) 
document.getElementById("less_than_False").innerHTML = x; //Use getElementById method to return the computed value of variable 'x' when called by the HTML element with the ID "less_than_false_Function"
}

console.log(3>4); //Displays the statement "false" in the console log

function coercionFunction() { //Create function called 'coercionFunction'
    var myAge = ("3" + 8); //Create variable 'myAge' and assign it a value of ("3" + 8)
document.getElementById("coercion").innerHTML = myAge; //Use getElementById method to return the computed value of variable 'myAge' when called by the HTML element with the ID 'coercion'
}

function double_equal_true_Function() { //Create function called 'double_equal_true_Function'
    var x = (5+5) == (14-4); //Create variable 'x' and assign it a true value with the true statement '(5+5) == (14-4)'
document.getElementById("compare1").innerHTML = x; //Use getElementById method to return the computed value of variable 'x' when called by the HTML element with the ID 'compare1'
}

function double_equal_false_Function() { //Create function called 'double_equal_false_Function'
    var x = (5+5) == (11); //Create variable 'x' and assign it a false value with the false statement '(5+5) == (11)'
document.getElementById("compare2").innerHTML = x; //Use getElementById method to return the computed value of variable 'x' when called by the HTML element with the ID 'compare2'
}

function triple_equal_SAME_DataType_SAME_Value_Function() { //Create function called 'triple_equal_SAME_DataType_SAME_Value_Function()'
    var x = "yellow"; //Create variable 'x' and assign it a string value of "yellow"
    var y = "yellow"; //Create variable 'y' and assign it a string value of "yellow"
    var z = (x===y) //Create variable 'z' and assign it a true value by comparing data types and values of the variables 'x' and 'y'
document.getElementById("triple1").innerHTML = z; //Use getElementById method to return the computed true value of variable 'z' when called by the HTML element with the ID 'triple1'
}

function triple_equal_DIFFERENT_DataType_DIFFERENT_Value_Function() { //Create function called 'triple_equal_DIFFERENT_DataType_DIFFERENT_Value_Function()'
    var x = "yellow"; //Create variable 'x' and assign it a string value of "yellow"
    var y = 5; //Create variable 'y' and assign it a number value of '5'
    var z = (x===y) //Create variable 'z' and assign it a false value by comparing data types and values of the variables 'x' and 'y'
document.getElementById("triple2").innerHTML = z; //Use getElementById method to return the computed false value of variable 'z' when called by the HTML element with the ID 'triple2'
}

function triple_equal_DIFFERENT_DataType_SAME_Value_Function() { //Create function called 'triple_equal_DIFFERENT_DataType_SAME_Value_Function()'
    var x = "5"; //Create variable 'x' and assign it a string value of "5"
    var y = 5; //Create variable 'y' and assign it a number value of 5
    var z = (x===y) //Create variable 'z' and assign it a false value by comparing data types and values of the variables 'x' and 'y'
document.getElementById("triple3").innerHTML = z; //Use getElementById method to return the computed false value of variable 'z' when called by the HTML element with the ID 'triple3'
}

function triple_equal_SAME_DataType_DIFFERENT_Value_Function() { //Create function called 'triple_equal_SAME_DataType_DIFFERENT_Value_Function()'
    var x = "yellow"; //Create variable 'x' and assign it a string value of "yellow"
    var y = "green"; //Create variable 'y' and assign it a string value of "green"
    var z = (x===y); //Create variable 'z' and assign it a true value by comparing data types and values of the variables 'x' and 'y'
document.getElementById("triple4").innerHTML = z; //Use getElementById method to return the computed false value of variable 'z' when called by the HTML element with the ID 'triple4'
}

function and_operator_true_Function() { //Create function called 'and_operator_true_Function'
    var x = (4<5 && 5<6); //Create variable 'x' and assign it a true value of "(4<5 && 5<6)"
document.getElementById("andTrue").innerHTML = x; //Use getElementById method to return the computed true value of variable 'x' when called by the HTML element with the ID 'andTrue'
}

function and_operator_false_Function() { //Create function called 'and_operator_false_Function'
    var x = (4<5 && 5>6); //Create variable 'x' and assign it a false value of "(4<5 && 5>6)"
document.getElementById("andFalse").innerHTML = x; //Use getElementById method to return the computed true value of variable 'x' when called by the HTML element with the ID 'andFalse'
}

function or_operator_true_Function() { //Create function called 'or_operator_true_Function'
    var x = (2==2 || 1>5); //Create variable 'x' and assign it a true value of "(2==2 || 1>5)"
document.getElementById("orTrue").innerHTML = x; //Use getElementById method to return the computed true value of variable 'x' when called by the HTML element with the ID 'orTrue'
}

function or_operator_false_Function() { //Create function called 'or_false_operator_Function'
    var x = (4==5 || 5>6); //Create variable 'x' and assign it a string value of "(4==5 || 5>6)"
document.getElementById("orFalse").innerHTML = x; //Use getElementById method to return the computed true value of variable 's' when called by the HTML element with the ID 'orFalse'
}

function not_operator_true_Function() { //Create function called 'not_operator_true_Function'
    var x = !(100>200); //Create variable 'x' and assign it a string value of "!(100>200)"
document.getElementById("notTrue").innerHTML = x; //Use getElementById method to return the computed true value of variable 's' when called by the HTML element with the ID 'notTrue'
}
function not_operator_false_Function() { //Create function called 'not_operator_false_Function'
    var x = !(100<200); //Create variable 'x' and assign it a string value of "!(100<200)"
document.getElementById("notFalse").innerHTML = x; //Use getElementById method to return the computed true value of variable 's' when called by the HTML element with the ID 'notFalse'
}