function Ride_Function() { //Create function
    var Height, Can_ride; //Create 2 variables 'Height' and 'Can_ride'
    Height = document.getElementById("Height").value; //Assigns 'Height' to the value of 'document.getElementById("Height").value'
    Can_ride = (Height < 52)? "You are too short":"You are tall enough"; //Uses the ternary operator (?) and assigns 'Can_ride' to the conditional statement value of '(Height < 52)? "You are too short":"You are tall enough"'
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Uses getElementById method to display the value of 'Can_ride + "to ride."'
} 

//Chalenge from step 119
function Vote_Function() { //Create Vote_Function()
    var Age, Can_Vote; //Create 2 variables 'Age' and 'Can_Vote'
    Age = document.getElementById("Age").value; //Assigns 'Age' to the value of 'document.getElementById("Age").value'
    Can_Vote = (Age > 17)? "You are of age":"You are not of age"; //Uses the ternary operator (?) and assigns 'Can_Vote' to the conditional statement value of '(Age >=18)? "You are of age":"You are not of age"'
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; //Uses getElementById method to display the value of 'Can_Vote + " to vote."'
}

//Step 122 -- The instruction was to copy the following word for word. See next step for comments on how it all works.
function Vehicle(Make, Model, Year, Color) { 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Step 123
function Family_Member(Age, Height, Weight, Hair) { //Create a new object class with a function called 'Family_Member()' and assign it parameters to describe the objects created within the class (Age, Height, Weight, Hair)
    this.Family_Member_Age = Age; //Utilize the 'this' keyword to construct the new value of 'Age' and refer to it whenever a new instance of the object class 'Family_Member()' is created
    this.Family_Member_Height = Height; //Utilize the 'this' keyword to construct the new value of 'Height' and refer to it whenever a new instance of the object class 'Family_Member()' is created
    this.Family_Member_Weight = Weight; //Utilize the 'this' keyword to construct the new value of 'Weight' and refer to it whenever a new instance of the object class 'Family_Member()' is created
    this.Family_Member_Hair = Hair; //Utilize the 'this' keyword to construct the new value of 'Hair' and refer to it whenever a new instance of the object class 'Family_Member()' is created
}
var Kirk = new Family_Member(38, "5'10&quot", 175, "straight blonde"); //Creates a variable named 'Kirk' and uses the 'new' keyword to assign it the argument values defined when creating the new instance of the object class that will use the constructor function called 'Family_Member(Age, Height, Weight, Hair)'.
var Steph = new Family_Member(38, "5'8&quot", "(she'd kill me if she saw this)", "wavy brown"); //Creates a variable named 'Steph' and uses the 'new' keyword to assign it the argument values defined when creating the new instance of the object class that will use the constructor function called 'Family_Member(Age, Height, Weight, Hair)'.
var Brighton = new Family_Member(6, "4'2&quot", 50, "straight blonder"); //Creates a variable named 'Brighton' and uses the 'new' keyword to assign it the argument values defined when creating the new instance of the object class that will use the constructor function called 'Family_Member(Age, Height, Weight, Hair)'.
var Lily = new Family_Member(3, "3'1&quot", 35, "curly blonde"); //Creates a variable named 'Lily' and uses the 'new' keyword to assign it the argument values defined when creating the new instance of the object class that will use the constructor function called 'Family_Member(Age, Height, Weight, Hair)'.
function Describe_Family_Member_Function() { //Creates a new function called 'Describe_Family_Member_Function()'
    document.getElementById("New_and_This").innerHTML = "Steph is " + Steph.Family_Member_Age + " years old, with " + Steph.Family_Member_Hair + " hair, standing at " + Steph.Family_Member_Height + ", weighing " + Steph.Family_Member_Weight + " pounds."; // Uses 'getElementById' method to reference the element with id="New_and_This" and sets the value to the output we desire using the new object class instance named 'Steph'
}

// Challenge Step 125 -- See comments above to see how the following works.
function favorite_gum_Function(brand, flavor) { 
    this.gum_brand = brand;
    this.gum_flavor = flavor;
}
var Vince = new favorite_gum_Function("Spry", "Spearmint");
var Drew = new favorite_gum_Function("Wrigleys (Big League Chew)", "Sour Apple");
var Rob = new favorite_gum_Function("Spry", "Cinnamon");

function chew_gum_Function() {
    document.getElementById("Chew").innerHTML = "Drew's favorite gum flavor is " + Drew.gum_flavor + ", made by: " + Drew.gum_brand + ".";
}

//Step 128
function Name_Function() { //Create function called 'Name_Function()'
    document.getElementById("Nested_Function").innerHTML = Name(); //References HTML element w/ id="Nested_Function" and sets it to the value of the function to be created called 'Name()'
    function Name() { //Established the nested function called 'Name()'
        var First_Name = "Kirk"; //Create variable 'First_Name' and assign it a value of the string 'Kirk'
        function last_name() {First_Name += " Hilton";} //Created another nested function called 'last_name()' and used the variable 'First_Name' and concatenated it with the string value of 'Hilton'
        last_name(); //Run's the function 'last_name();
        return First_Name; //Returns the value of the variable 'First_Name' to the function 'last_name()'
    }
}

//This is just the previous step, but broken down into 2 smaller parts, which helps me to break down and see what is going on inside each function a little better.
function combine_names_Function() {
var First2_Name = "Kirk";
    function last2_name() {First2_Name += " Hilton";} 
    last2_name();
    return First2_Name;
}

function Name2_Function() {
    document.getElementById("Nested2_Function").innerHTML = combine_names_Function();
}
