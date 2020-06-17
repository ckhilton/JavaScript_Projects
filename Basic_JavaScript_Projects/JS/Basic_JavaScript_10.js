//===================================================================================
//      AUTHOR: KIRK HILTON
//      ASSIGNMENT: BASIC HTML 10
//===================================================================================

//-------STEP 179------------
function Call_Loop() { //Create function 'Call_Loop()'
    var digit = ""; //Create variable 'digit' and give it a blank string value of ""
    var x = 1; //Create variable 'x' and set value to '1'
    while (x < 6) { //Use 'while' loop with conditional statement of 'x < 6'
        digit += x; //Code to be executed while the above conditional statement returns 'true'
        x++; //Add 1 to 'x' value and return the new value to the while loop after each time the conditional code is executed
    }
    document.getElementById("Loop").innerHTML = digit; //Reference HTML element with id="Loop" and sets its innerHTML value to the variable 'digit'
}

//--------STEP 180----------
function string_length() { //Create function 'string_length()
    var x = "Kirk Hilton"; //Create variable 'x' and assign value "Kirk Hilton"
    var y = x.length; //Create variable 'y' and use the string.length property to assign a value of 'x.length';
    document.getElementById("length").innerHTML = y; //Use 'document.getElementById("length").innerHTML' and set it to value of 'y'
  }

//--------STEP 183----------
var Animals = ["Dog", "Cat", "Bird", "Squirrel", "Deer"]; //Create universal variable 'Animals' and set value to the array '["Dog", "Cat", "Bird", "Squirrel", "Deer"]'
var a = ""; //Create variable 'a' and assign the blank string value of "".
var x; //Create variable 'x';
function for_Loop() { //Create function called 'for_Loop()'
    for (x = 0; x < Animals.length; x++) { //Use 'for' loop with conditional statements '(x = 0; x < Animals.length; x++)'
    a += Animals[x] + "<br>"; //Block of code to be executed while the conditional statements above return 'true'
    }
    document.getElementById("List_of_Animals").innerHTML = a; //Use 'document.getElementById("List_of_Animals").innerHTML' and set it to the value of 'a' 
}

//---------STEP 187----------
function array_Family_Function() { //Create function called 'array_Family_Functioin()'
    var fam_name = []; //Create variable 'fam_name' and assign value []
    fam_name[0] = "Kirk"; //Create instance of the object 'fam_name' at index [0]
    fam_name[1] = "Steph"; //Create instance of the object 'fam_name' at index [1]
    fam_name[2] = "Brighton";//Create instance of the object 'fam_name' at index [2]
    fam_name[3] = "Lily"; //Create instance of the object 'fam_name' at index [3]
    document.getElementById("Hilton_Family").innerHTML = "This is " + fam_name[1] + " Hilton. She has a birthday this week!"; //Use 'document.getElementById("Hilton_Family").innerHTML' to insert the object at the index value of [1] and comletes the sentence.
}

//----------STEP 195------------
function constant_Function() { //Create function called 'constant_Function'
    const Climbing_Equipment = {type:"harness", size:"large", color:"grey"}; //Create object called 'Climbing_Equipment' and gave it values '{type:"harness", size:"large", color:"grey"}.
    Climbing_Equipment.material = "nylon"; //Add a new property to the array of the object and named it 'material' with a value of "nylon"
    Climbing_Equipment.size = "medium"; //Change property of 'size' to "medium"
    document.getElementById("Constant").innerHTML = "Petzl makes my favorite climbing " + Climbing_Equipment.type + ". It's made of thick strong " + Climbing_Equipment.material + " and is size " + Climbing_Equipment.size + "."; //Assign object property values from the 'Climbing_Equipment' object to the string for display.
}

//---------STEP 197------------
    var age = "38"; //Declare global variable 'name'
{
    let age = "Kirk Hilton"; //Use 'let' keyword to redefine variable 'age'
    document.getElementById("Name").innerHTML = "STEP 197: " + "<br>" + "Name: " + age; //Use id="name" to display new value of variable 'age'
} 
    document.getElementById("Age").innerHTML = "Age: " + age; //Use id="age" to display original value of variable 'age'


//-----STEP 200 (CHALLENGE) ----
function myReturn_Function() { //Create function 'myReturn_Function()'
    function return_Function(a, b) { //Create subprogram function with parameters 'return_Function(a, b)'
    return a * b; //Use return command to return the value of the parameters '(a, b)' when multiplied
    }
    document.getElementById("Return").innerHTML = return_Function(5, 10); //Use id="Return" to display the value of the nested function with parameters '(5, 10)' in the HTML element with id="Return"
}

//----------STEP 203-----------
let shoe = { //Use let to define variable shoe for just this instance
    make: "La Sportiva ", //The following are all properties of the object shoe
    model: "TX4 MID GTX ",
    color: "Carbon/Flame ",
    cost: "$190 ",
    size: "43.5",
    description: function() { // In this property we set the value to the function that returns the string below.
        return "STEP 203: My climbing approach show is the " + this.make + this.model + " size " + this.size + ". It was " + this.cost + " but it lasted me 4 years. Time for new shoes.";
    }
}
document.getElementById("Shoe").innerHTML = shoe.description(); //Use id="Shoe" to display 'shoe.description()

//----STEP 204 (CHALLENGE)-----
function Challenge_204() { //Create function called 'Challenge_204()'
    var text = ""; //Create variable 'text' and set value to blank string ""
    for (x = 0; x < 10; x++) { //Use for loop with conditions '(x = 0; x < 10; x++)'
        if (x === 3) {continue;} //During the for loop use 'if' statement to skip 3 when x === 3 and continue on 
        if (x === 11) {break;} //During the for loop use 'if' statement to break when x === 11. Stops the loop
        text += "Number: " + x + "<br>"; //when the for loop conditions of 'x < 10' the variable text is appended with the strings and the value of 'x' during that loop cycle
    }
    document.getElementById("Counter").innerHTML = text //Use id="Counter" to display the value of 'text' after each loop cycle
}