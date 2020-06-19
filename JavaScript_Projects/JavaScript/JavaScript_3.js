//==============================================================================
//      AUTHOR: KIRK HILTON
//      ASSIGNMENT: JAVASCRIPT 3
//==============================================================================

//-------------- STEP 243 ------------------
function Favorite_Film(pro) { //Create 'Favorite_Film()' and assign it a parameter of data 'pro'. 
    var proClimber = pro.getAttribute("data-pro-climber"); //Create variable 'proClimber' and assing it the value of the data set 'pro'
    alert(pro.innerHTML + " is an amazing film that features professional climber " + proClimber); //Create an alert with a string that uses the values of 'pro.innerHTML' and 'proClimber'
}