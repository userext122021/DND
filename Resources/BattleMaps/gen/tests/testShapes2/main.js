let page=null;
let x=0;
let y=0;
let size=0;
let size2=0;
let drMax=0;
let dAngle2=30;
let angle2=0;
let angle0=0;



function drawTree(page,x0,y0,r1,r2,drMax,angle0,dAngle1,dAngle2,fillColor,strokeColor)
{
    let points=[];
    for(let angle=angle0;angle<angle0+360;angle+=dAngle1)
    {
        let dr=drMax*Math.cos(Math.PI*angle2/180.0);
        let x=(r1+dr)*Math.cos(Math.PI*angle/180.0);
        let y=(r2+dr)*Math.sin(Math.PI*angle/180.0);
        let p={x:x,y:y};
        points.push(p);
        angle2+=dAngle2;
    }

    page.path(x0,y0,points,fillColor,strokeColor);
}

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
    size=getValue("size"); 
    size2=getValue("size2"); 
    drMax=getValue("drMax"); 
    angle0=getValue("angle0"); 
    dAngle1=getValue("dAngle1");  
    dAngle2=getValue("dAngle2"); 
    
    
}

function update()
{
    updateValues();
    redraw();
}

function redraw()
{
    page.clear();
    //page.rect(x,y,20,20,"red");
    drawTree(page,x,y,size,size2,drMax,angle0,dAngle1,dAngle2,"#4D7831","#2D4521 ");

}

function main()
{
   page=new Page();
   update();
  
}