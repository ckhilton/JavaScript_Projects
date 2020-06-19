//============================================================================
//      AUTHOR: KIRK HILTON
//      ASSIGNMENT: JAVASCRIPT_2.JS
//============================================================================

//--------------- STEP 221 --------------
function validate_Function() { //Create 'validate_Function()'
    var x = document.forms["contact"]["first", "last", "phone", "email"].value; //Assign 'x' to get the document form with the name "contact" and return the values for the "first", "last", "phone", "email" fields.
    if (x == "") { //If any or all of the returned values for 'x' are blank string(s) i.e. "" then...(see below)...
      alert("All fields must be filled."); // (from above)...an alert box will pop up saying "All fields must be filled." 
      return false; //returns the value of 'false' to the value of 'x' in the 'if' statement in order to stop the function.
    }
  }

  