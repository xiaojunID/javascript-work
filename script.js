// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// Variable to hold the current left margin.
var ChangeMargin = [0,0,0,0,0];

//variable for each box
var moveAmountArray = [5,10,15,20,25];


function boxClicked(i){
    return function(){
        console.log("Hey, box"+ i + "clicked!");
        ChangeMargin[i] += moveAmountArray[i];
        if(i == 4){
            boxes[i].style.marginTop = ChangeMargin[i] + "px";
        }else{
        boxes[i].style.marginLeft = ChangeMargin[i] + "px";
        }
    };
}

var color = ["green","purple","#191919","blanchedalmond","red"];
function init(){
    for(i=0;i<5;i++){
        console.log("color is "+ color[i]);
        boxes[i].style.backgroundColor = color[i];
    }
}

//start
init();
// When anyone clicks on the box, call the function "box*Clicked".
boxes[0].addEventListener("click", boxClicked(0));
boxes[1].addEventListener("click", boxClicked(1));
boxes[2].addEventListener("click", boxClicked(2));
boxes[3].addEventListener("dblclick", boxClicked(3));
boxes[4].addEventListener("click", boxClicked(4));
