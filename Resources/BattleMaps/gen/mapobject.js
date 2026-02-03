class MapObject
{
    constructor(name="UnknownObject",pos_x=0,pos_y=0,width=100,height=100,fillColor="white",strokeColor="black")
    {
        this.x=pos_x;
        this.y=pos_y;
        this.shadowDx=-3;
        this.shadowDy=-3;
        this.width=width;
        this.height=height;
        this.fillColor=fillColor;
        this.strokeColor=strokeColor;
        this.name=name;
        this.parent=null;
        this.angle=0;
        this.shadowColor="rgba(0,0,0,0.3)";
        this.hasShadow=true;
    }

    update()
    {

    }

    drawXY(page,x,y,fillColor,strokeColor)
    {
        page.rect(x,y,this.width,this.height,fillColor,strokeColor);
    }

    drawShadow()
    {
        this.drawXY(page,this.x+this.shadowDx,this.y+this.shadowDy,this.shadowColor,"rgba(0,0,0,0)");
    }
    draw(page)
    {
        if(this.hasShadow)
        {
            this.drawShadow();
        }
        this.drawXY(page,this.x,this.y,this.fillColor,this.strokeColor);
    }

    rotate(angle)
    {
        this.angle=angle;
    }

    rotateBy(angle)
    {
        this.angle+=angle;
    }

    moveTo(x,y)
    {
        this.x=x;
        this.y=y;
    }

    moveBy(dx,dy)
    {
        this.x+=dx;
        this.y+=dy;
    }   
}