//=================================================================================
//      AUTHOR: KIRK HILTON
//      ASSIGNMENT: JAVASCRIPT 1
//=================================================================================

//------STEP 207---------
function switch_Function() { //Create 'switch_Function()
    var Result; //Declare variable 'Result'
    var Error = "Please try again." //Declare 'Error' equal to "Please try again"
    var Buffet = "food is delicious! Please help yourself!" //Declare 'Buffet' as "food is delicious! Please help yourself!"
    var Food = document.getElementById("entered").value; //Declare 'Food' as whatever the value is inside the document field with id="entered". In this case the field is an input field that can be changed by the user. 
    switch (Food) { //Use switch statement for variable 'Food', then lists the cases for each new possible value of the input field and what the result will display.
        case "American": 
            Result = "American " + Buffet; //Use variable 'Result' to display "American food is delicious! Please help yourself"
        break;
        case "Chinese":
            Result = "Chinese " + Buffet; //Use variable 'Result' to display "Chinese food is delicious! Please help yourself"
        break;
        case "Korean":
            Result = "Korean " + Buffet; //         ""       ""        ""    "Korean food .... ""       ""          ""
        break;
        case "Vegan":
            Result = "Vegan " + Buffet; //          ""       ""        ""    "Vegan food .... ""       ""          ""
        break;
        case "Thai":
            Result = "Thai " + Buffet; //Use     ""       ""        ""       "Thai food .... ""       ""          ""
        break;
        case "Indian":
            Result = "Indian " + Buffet; //Use     ""       ""       ""      "Indian food .... ""       ""          ""
        break;
        case "Vietnamese":
            Result = "Vietnamese " + Buffet; //Use      ""         ""        "Vietnamese food .... ""       ""          ""
        break;
        case "Mexican":
            Result = "Mexican " + Buffet; //Use     ""       ""       ""     "Mexican food .... ""       ""          ""
        break;
        case "Peruvian":
            Result = "Peruvian " + Buffet; //Use     ""       ""     ""      "Peruvian food .... ""       ""          ""
        break;
        case "Chilean":
            Result = "Chilean " + Buffet; //Use     ""       ""       ""     "Chilean food .... ""       ""          ""
        break;
        case "Greek":
            Result = "Greek " + Buffet; //Use     ""       ""       ""       "Greek food .... ""       ""          ""
        break;
        case "Junk":
            Result = "Junk " + Buffet; //Use     ""        ""        ""      "Junk food .... ""       ""          ""
        break;
        default: Result =  Error; //This is the default result of the input field if no input was entered and submit was clicked. Error is the variable equal to the string "Please try again" (which will be displayed)
    }
    document.getElementById("result").innerHTML = Result; //Use id="result" to display 
}

//-----------STEP 216-------------
function ClassName_Function() { //Create function 
    var x = document.getElementsByClassName("ClassName"); //Create variable 'x' and assign value of 'document.getElementsByClassName("ClassName")'
    x[1].innerHTML = "This text is different!"; //Declares 'x' with the first listed position of the class "ClassName" in the HTML space of '.innerHTML' to be a string value of This text is different!"
}

//----------STEP 218--------------
function Canvas_Function() { //Create Canvas_Function()
    var c = document.getElementById("canvas"); //Declare 'c' equals the element with id="canvas"
    var ctx = c.getContext("2d"); //Declare local variable 'ctx' equals 'c.getContext("2d")'
    var img = document.getElementById("galaxy"); //Declare the variable 'img' = the element with id="galaxy"
    ctx.drawImage(img,0,0) //Statement that draws the image with the variable 'img = document.getElementById("galaxy")'
}

function gradient_Function() { //Create 'gradient_Function()'
    var c = document.getElementById("canvas2"); //Declare var 'c' equals the value of id="canvas2"
    var ctx = c.getContext("2d"); //Declare local variable 'ctx' equals 'c.getContext("2d")'
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 170); //Declare 'my_gradient' equals the value of the linear gradient (0, 0, 0, 170) (black to white)
    my_gradient.addColorStop(0, "black"); //Adds a max color value for one end of the gradient. At 0 it's black.
    my_gradient.addColorStop(1, "white"); //Adds a max color value for the other end of the gradient. At 1 it's white.
    ctx.fillStyle = my_gradient; //Use variable 'ctx' and add a fillstyle equal to the gradient value of 'my_gradient'
    ctx.fillRect(0, 0, 200, 200); //Use variable 'ctx' to fill the rectangle in the canvas as specified by (0[position on X-axis], 0[position onY-axis], 200[width to fill], 200[height to fill])
}