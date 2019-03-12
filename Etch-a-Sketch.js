
const container = document.querySelector("#container");
const content = document.querySelector("#content");
let mydiv=[];

//Gets size of div/box given container is 960px
function getSize(v){
    let size = 960/v;
    let pix = (size)+"px";
    return pix;  
}

getSize(8);

//create grid of divs
function createBox(n){
    gridSize = (n* n);
        
        for (i=1;i<=gridSize;i++){
                mydiv[i] = document.createElement("div");
                mydiv[i].classList.add("box");
                mydiv[i].style.backgroundColor="white";
                mydiv[i].style.width=getSize(n);
                mydiv[i].style.height=getSize(n);
                mydiv[i].style.textAlign="center";
                mydiv[i].style.borderWidth="0px";
                container.appendChild(mydiv[i]);
                mydiv[i].addEventListener("mouseover", draw);
            
        }
    }

createBox(50);

//create clear button
const mybutton = document.createElement("button");
content.insertBefore(mybutton, container);
mybutton.innerText="Clear!"
mybutton.padding="10px";
mybutton.id="clear";
const clearbutton = document.querySelector("#clear");
clearbutton.addEventListener("click", clearButtonClick);

function clearButtonClick(){
    const boxes = document.querySelectorAll(".box");
        boxes.forEach( mydiv =>{
            mydiv.style.backgroundColor="white";
        })
}

function colorButtonClick(){
    const boxes = document.querySelectorAll(".box");
        boxes.forEach( mydiv =>{
            mydiv.style.backgroundColor="lightGray";
        })
}

function randomColor(r,g,b){
    r = Math.floor(256*Math.random());
    g = Math.floor(256*Math.random());
    b = Math.floor(256*Math.random());
    return [r,g,b];
}


function draw(e){
    randomColor();
    let tempColor= "rgb("+ randomColor[0]+ ", "+ randomColor[1]+", "+ randomColor[2]+")";
    if (e.target.style.backgroundColor==="white"){
        e.target.style.backgroundColor="black";
    }else if (e.target.style.backgroundColor==="lightGray"){
        e.target.style.backgroundColor= randomColor();
        
    }
}

    


//create color button
const mybutt2 = document.createElement("button");
content.insertBefore(mybutt2, container);
mybutt2.innerText="Color!";
mybutt2.padding="10px";
mybutt2.id="color";
const colorButton = document.querySelector("#color");
colorButton.addEventListener("click", colorButtonClick);



//create Heading
const mainHeader = document.createElement("h1");
content.insertBefore(mainHeader, mybutton);
mainHeader.innerText="My Etch-a-Sketch Project";
mainHeader.style.display="block";
mainHeader.style.textAlign="center";
