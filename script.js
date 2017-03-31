// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// For the 1st box (index = 0), change the background color to "blue".
boxes[0].style.backgroundColor = "blue";

// For the 3rd box (index = 2), change the background color to "yellow".
boxes[2].style.backgroundColor = "yellow";

// Variable to hold the current left margin.
var leftMargin = 0;

// Variable used to add to the left margin.
var moveAmount = 20;

// Function that adds moveAmount to leftMargin then appends leftMargin
// to the first box's margin left. Basically moving the box to the right.
function boxClicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[0].style.marginLeft = leftMargin + "px";
}

// When anyone clicks on the first box, call the function "boxClicked".
boxes[0].addEventListener("click", boxClicked);
