//====================================================================================
//                            BASIC HTML 7 ASSIGNMENTS        
//====================================================================================

var global_variable = "My full name is Christopher Kirk Hilton. " //This variable is not within a function and therefore can be globally accessed by every function.

function global_variable_Function() { //Created function called 'global_variable_Function()'
    document.write(global_variable); //Uses document.write() on the variable 'global_variable'.
}

function local_variable_Function() { //Created a function called 'local_variable_function()'
    var local_variable = "Kirk"; //Created a local variable called 'local_variable' and gave it a value of the string "Kirk Hilton"
    document.write("But I go by my middle name, " + local_variable + "."); //Used document.write with the global variable called 'global_variable' and concatenated it with the local variable called 'local_variable' to demonstrate usage of a local and a global variable
}

function both_variable_types_Function() { //Created a function called 'both_variable_types_function()'
    var local_variable = "Kirk"; //Created 'local_variable' and assigned it the value of "Kirk"
    document.write(global_variable + "But I go by my middle name, " + local_variable + "."); //Uses the document.write() method to display the values of 'global_variable + "But I go by my middle name, " + local_variable + "."'
}

//STEP 134
function myFunction() { //Created function called 'myFunction()'
    var Time = new Date().getHours() //Create 'Time' and assign it the value of 'new Date().getHours()' which gets the current time of day.
    if  (Time < 19 == Time > 8) { //Uses 'if' to check if the conditional statements '(Time < 19 == Time > 8)' are both true. 
        document.getElementById("time").innerHTML = "There's plenty of daylight, let's go for a walk!"; //If the above statement is true, we use the 'document.getElementById()' method to display "There's plenty of daylight, let's go for a walk!" 
    } else { //Uses 'else'
        document.getElementById("time").innerHTML = "It's time to stack some ZZZ's!"; //When the 'if' statement is false, we use 'else' and the 'document.getElementById()' method to display "It's time to stack some ZZZ's!"
    }
}

//STEP 135
function bank_Account() { //Create function called 'ferris_Wheel()'
var Money, Broke; //Create 2 variables 'Money' and 'Broke'
Money = document.getElementById("Money").value; //Assign the value of 'Money' to 'document.getElementById("Money").value'
Broke = (Money == 0); //Assign the value of 'Broke' to the conditional statement (Money == 0))
    if (Broke == true) { //Uses 'if' with the conditional statement of (Broke == true) 
        document.getElementById("Broke").innerHTML = "You ain't going nowhere!" //if the above statement is true, then this uses the 'document.getElementById()' method to display "You ain't going nowhere!"
    } else { //if (Broke == true) is false, then 'else' is utilized
        document.getElementById("Rich").innerHTML = "You're rich!" //when the 'if statement is false, 'else' is executed and utilizes the 'document.getElementById()' method to display "You're rich!"
    }
}

//STEP 137
function ferris_Wheel() { //Create Ride_2_Function()
    var Height, Can_ride; //Create 2 variables 'Height' and 'Can_ride'
    Height = document.getElementById("Height").value; //Assigns 'Height' to the value of 'document.getElementById("Height").value'. which will retrieve the input given to the HTML <input> element from the user. 
    Can_ride = (Height >= 52); //Uses the conditional operater (>=) and assigns 'Can_ride' to the conditional statement value of '(Height >= 52)?' which will again reference the input given to the HTML <input> element by the user.
    if (Can_ride == true) { //This time we use the if statement and check that the value of variable 'Can_ride' is true, based on the variable 'Height' which was assigned a value from the input given to the HTMl <input> element by the user.
        document.getElementById("Ride").innerHTML = "* Welcome aboard the Scheel's Ferris Wheel! *"; //Use the document.getElementById() method to display the value of "* Welcome aboard the Scheel's Ferris Wheel! *" so long as the conditionial statement (Can_ride == true) is actually true.
    } else { // Use the 'else' statement for whenever the previous 'if' statement is not true. 
        document.getElementById("Sorry").innerHTML = "* We are sorry, but it is not safe for you to ride! *"; //Uses document.getElementById() when the else statement is invoked to display "* We are sorry, but it is not safe for you to ride! *". 
    }
}

//STEP 138 ***This step is copied almost word for word, with the exception of using my own names for things***
function get_time_Function() { 
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It's the morning!";
    }
    else if (time > 12 == time < 21) {
        reply = "It's the afternooon!"
    }
    else {
        reply = "It's evening time!"
    }
    document.getElementById("Time_of_Day").innerHTML = reply;
}