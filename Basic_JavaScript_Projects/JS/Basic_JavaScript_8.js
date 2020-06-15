//=========================================================
//      AUTHOR: KIRK HILTON 
//      ASSIGNMENT: BASIC HTML 8
//=========================================================

//STEP 143 (string method to concatenate)
function concatenate_Function() { //Create function called 'concatenate_Function()'
    var string1 = "Using the"; //Create variable 'string1' and give it a string value
    var string2 = "&quotconcat()&quot "; //Create variable 'string1' and give it a string value
    var string3 = "method."; //Create variable 'string3' and give it a string value
    document.getElementById("concat").innerHTML = string1.concat(string2, string3); // Use 'document.getElementById' method and the 'concat()' method to display the concatenated string variables.
}

//STEP 145 (string method to "slice" characters from the string and display them as specified)
function slice_Function() { //Create function called 'slice_Function()
    var string1 = "This will be: Using the &quotslice()&quot method."; //Create variable 'string1' and give it a string value
    document.getElementById("slice").innerHTML = string1.slice(13,51); //use 'document.getElementById()' method and the 'slice()' method to display the specified characaters from 13-51 (note that these include the '&quote' character entity references in order to display the quotation marks in the browser)
}

//STEP 146 (These next two are part of the challenge to look up and execute 2 new string methods)
function toUpperCase_Function() { //Create function called 'toUpperCase_Function()'
    var string1 = "using the &quottoUpperCase()&quot method." //Create variable 'string1' and give it a string value
    document.getElementById("upper").innerHTML = string1.toUpperCase(2); //Use 'document.getElementById()' method and the 'toUpperCase' method to display the specified characters in the variable 'string1' in upper case. In this case just character 2 'u' will be changed to upper case.
}

function search_Function() { //Create function called 'search_Function'
    var string1 = "This will be: Using the &quotsearch()&quot method."; //Create variable 'string1' and give it a string value
    document.getElementById("search").innerHTML = string1.search("U"); //Use 'document.getElementById()' method and the 'search()' method to display the 'number' results of variable 'string1' when given the parameter "U" to search for
}

//STEP 148
function toString_Function() { //Create function called 'toString_Function()'
    var number = 8221981; //Create variable 'number' and give it a number value
    document.getElementById("toString").innerHTML = number.toString(); //Use 'document.getElementbyID() method and the 'toString()' method to display the variable 'number' value of 8221981 to a string value
}

//STEP 150
function toPrecision_Function() { //Create function called 'toPrecision_Function()'
    var number = 3.141592653589793238; //Create variable 'number' and give it a long number value
    document.getElementById("toPrecision").innerHTML = number.toPrecision(5); //Use 'document.getElementById()' method and the 'toPrecision()' method to display the variable 'number' value to only 5 digits
}

//STEP 151 (These next two are part of the challenge to look up and execute a new number method and a new string method)
function toFixed_Function() { //Create function called 'toFixed_Function()'
    var number = 3.141592653589793238; //Create variable 'number' and give it a long number value
    document.getElementById("toFixed").innerHTML = number.toFixed(4); //Use 'document.getElementById()' method and the 'toFixed()' method to display the variable 'number' to a fixed number with only 4 decimals by rounding
}

function valueOf_Function() { //Create function called 'valueOf_Function()'
    var string1 = "This is a primitive string"; //Create variable 'string1' and give it a string value
    document.getElementById("valueOf").innerHTML = string1.valueOf(); //Use 'document.getElementById()' method and the 'valueOf()' method to display the native value of the variable and string called 'string1'
}