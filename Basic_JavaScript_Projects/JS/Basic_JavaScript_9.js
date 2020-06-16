/* STEP 154 */
function countdown() { //Create function 'countdown()'
    var seconds = document.getElementById("seconds").value; //Create variable 'seconds' and set the value equal to 'document.getElementById("seconds").value'
    function tick() { //Creates sub-function 'tick()'
        seconds = seconds - 1; //Assigns seconds to a value of 'seconds - 1'
        timer.innerHTML = seconds; //refernces HTML tag with id of 'timer' and displays the .innerHTML as the value of 'seconds'
        setTimeout(tick, 1000); //Counts down by 1000milliseconds or 1 second
    if  (seconds == -1) { //Uses 'if' to check if variable 'seconds' is equal to -1
        alert("Time's up!"); // If seconds is equal to -1 (true) it displays an alert saying "Time's up!"
        }
    }
    tick(); //Runs the sub-function 'tick()' 
}

// STEP 156
var slide_position = 1; //Create variable 'slide_position' with value of '1'
Slides_Function(slide_position); //Assigns 'Slides_Function()' with a parameter of the variable 'slide_position'

function Displayed_Picture(n) { //Create 'Displayed_Picture()' function with a parameter of 'n'
    Slides_Function(slide_position = n); //Assigns 'Slides_Function()' with a parameter value of 'slide_position = n'
}

function Next_Picture(n) { //Create 'Next_Picture()' with a parameter of 'n'
    Slides_Function(slide_position += n); //Assign 'Slides_Function()' with a parameter value of 'slide_position += n'
}

function Slides_Function(n) { //Create 'Slides_Function()' with a parameter of 'n'
    var Index; //Create variable named 'Index'
    var Pics = document.getElementsByClassName("Picture"); //Create variable named 'Pics' and assign it a value of 'document.getElementsByClassName("Picture")'
    var Square = document.getElementsByClassName("Selector"); //Create variable named 'Square' and assign it a value of 'document.getElementsByClassName("Selector")'
    if (n > Pics.length) {slide_position = 1} //Use 'if' to check if 'n' is greater than the total number of returned values for the array of HTML elements that have 'id="Picture"'. If the statement returns 'true' then the variable 'slide_position' is set to a value of '1'
    if (n < 1) {slide_position = Pics.length} //Use 'if' to check if 'n' is less than 1. If 'true' then the variable 'slide_position' will be set to 'Pics.length'
    for (Index = 0; Index < Pics.length; Index++) { //Use 'for' loop. Parameters set to (Index = 0; Index < Pics.length; Index++)  
        Pics[Index].style.display = "none";  //The display style of the variable 'Pics' at the index value of 'Index' is set to "none". No element with 'id="Picture"' will display unless otherwise called to display. 
    }
    for (Index = 0; Index < Square.length; Index++) { //Use 'for' loop. Parameters set to '(Index = 0; Index < Square.length; Index++)'
        Square[Index].className = Square[Index].className.replace(" active", ""); //The class name of the HTML elements with 'id="Selector"' will be replaced with the class (" active", "")
    }
    Pics[slide_position-1].style.display = "block";  //Variable 'Pics' returns array of 4 HTML elements with 'id="Picture"'. The display style of the HTML element at an index value equal to 'slide_position - 1' is changed to display: block (aka picture showing). 
    Square[slide_position-1].className += " active"; //Variable 'Square' returns array of 4 HTML elements with 'id="Selector"'. The class name of the HTML element at an index value equal to 'slide_position - 1' is appended with the class name of " active" (aka color changed while corresponding picture is showing.)
}