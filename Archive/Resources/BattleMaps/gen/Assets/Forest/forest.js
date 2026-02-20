class Grass extends MapObject
{
    constructor(name="Grass",x=0,y=0,width=100,height=100,fillColor="white",strokeColor="black")
    {
        super(name,x,y,width,height,fillColor,strokeColor);
        this.angle=0;
        this.drMax=1;
        this.dAngle1=1;
        this.dAngle2=30;
        this.points=[];
        this.update();
    }

    setSize1(size)
    {
        this.dAngle1=size;
    }
    setSize2(size)
    {
        this.drMax=size;
    }

    setSize3(size)
    {
        this.dAngle2=size;
    }
    
    update()
    {
        let r1=this.width/2;
        let r2=this.height/2;
        this.points.length=0;
        let angle2=0;
        let angle0=this.angle;
        let drMax=this.drMax;
        let dAngle1=this.dAngle1;
        let dAngle2=this.dAngle2;
        
            for(let angle=angle0;angle<angle0+360;angle+=dAngle1)
            {
                let dr=drMax*Math.cos(Math.PI*angle2/180.0);
                let x=(r1+dr)*Math.cos(Math.PI*angle/180.0);
                let y=(r2+dr)*Math.sin(Math.PI*angle/180.0);
                let p={x:x,y:y};
                this.points.push(p);
                angle2+=dAngle2;
            }
    }

    drawXY(page,x,y,fillColor,strokeColor)
    {  
      page.path(x,y,this.points,fillColor,strokeColor);
    }
}


class Bush extends MapObject
{
    constructor(name="Bush",nLayers,x=0,y=0,width=100,height=100,fillColor="white",strokeColor="black")
    {
        super(name,x,y,width,height,fillColor,strokeColor);
        this.layers=[];
        this.nLayers=nLayers;
        this.update();
    }

    update()
    {
        this.layers.length=0;
        let width=this.width;
        let height=this.height;
        let fillColor=this.fillColor;
        let strokeColor=this.strokeColor;

        for(let i=0;i<this.nLayers;i++)
        {
            let x=this.x;
            let y=this.y;
    
            let layer=new Grass("BushLayer",x,y,width,height,fillColor,strokeColor);
            if(i>0)
            {
                layer.hasShadow=false;
            }
            width*=0.75;
            height*=0.75;
            this.layers.push(layer);
        }
    }

    drawXY(page,x,y,fillColor,strokeColor)
    {
        for(let i=0;i<this.layers.length;i++)
        {
            this.layers[i].drawXY(page,x,y,fillColor,strokeColor);
        }
    }
}