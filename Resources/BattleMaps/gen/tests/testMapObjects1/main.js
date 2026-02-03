'use strict';

let page=null;
let x=100;
let y=100;
let width=50;
let height=50;

let size1=1;
let size2=1;
let size3=1;
let angle=0;



let obj1=null;
let grass=null;
let bush=null;



function getValue(id)
{
    const e=document.getElementById(id);
    const value=parseFloat(e.value);
    e.parentElement.getElementsByClassName("valueCaption")[0].innerText=id+":"+value;
   
return value;
}
function updateValues()
{
    x=getValue("x");
    y=getValue("y"); 
    size1=getValue("size1"); 
    size2=getValue("size2"); 
    size3=getValue("size3"); 
    angle=getValue("angle"); 
    
    
}

function update()
{
    updateValues();
    obj1.moveTo(x,y);
    grass.moveTo(x,y);
    grass.setSize1(size1);
    grass.setSize2(size2);
    grass.setSize3(size3);
    grass.rotate(angle);
    grass.update();

    bush.moveTo(x,y);
    bush.update();
    redraw();
}

function redraw()
{
    page.clear();
    //obj1.draw(page);
    //grass.draw(page);
    bush.draw(page);
}

function main()
{
   page=new Page();
   obj1=new MapObject("Obj1",x,y,width,height,"#4D7831","#2D4521 ");
   grass=new Grass("TreeSegment",x,y,width,height,"#4D7831","#2D4521 ");
   bush=new Bush("Bush",3,x,y,width,height,"#4D7831","#2D4521");
   update();
  
}