
var circle=document.getElementsByClassName("btn");
var color=[];

getColor();
function getColor(){
    var i;
    for(i=0;i<circle.length;i++){
        color.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );
    }
}

assignColor();
function assignColor(){
    var i;
    for(i=0;i<circle.length;i++){
        circle[i].style.backgroundColor = color[i];
        circle[i].setAttribute("data",color[i]);
    }
}

var pick=randomColor();
function randomColor(){
    var random=color[Math.floor(Math.random()*circle.length)];
    colorName.innerText=random;
    return random;
}

check();
function check(){
    var i;
    for(i=0;i<circle.length;i++){
        circle[i].onclick=function(){
            var getColor=this.getAttribute("data");
            if(getColor==pick){
                document.getElementById("colorName").innerHTML="CORRECT !!";
                document.getElementById("colorName").style.color="darkgreen";
            }
            else{
                document.getElementById("colorName").innerHTML="WRONG !!";
                document.getElementById("colorName").style.color="red";
            }
        }
    }
}

function replay(){
        window.location.reload();
}