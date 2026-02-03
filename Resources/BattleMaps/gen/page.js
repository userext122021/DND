class Page
{
    constructor(name)
    {
        this.width=297;
        this.height=210;
        this.ns="http://www.w3.org/2000/svg";
        let svg=document.createElementNS(this.ns,"svg");
        svg.id=name;
        svg.setAttribute("viewBox", "0 0 297 210");
        document.body.appendChild(svg);
        this.svg=svg;
    }

    clear()
    {
        this.svg.replaceChildren();
    }
    rect(x,y,w,h,fillColor,strokeColor)
    {
        let rect=document.createElementNS(this.ns,'rect');
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", w);
        rect.setAttribute("height", h);
        rect.setAttribute("stroke", strokeColor);
        rect.setAttribute("fill", fillColor);
        
        this.svg.appendChild(rect);
    }

     path(x0,y0,points,fillColor,strokeColor)
    {
       
        let d="M ";
        d+=points[0].x+x0;
        d+=" "+points[0].y+y0+" ";

        for(let i=1;i<points.length;i++)
        {
            //let x=(points[i].x-points[i-1].x).toFixed(2);
            //let y=(points[i].y-points[i-1].y).toFixed(2);
            
            let x=(points[i].x+x0).toFixed(2);
            let y=(points[i].y+y0).toFixed(2);


            d+="L ";
            d+=x+" ";
            d+=y+" ";

        }
        d+=" Z";
        let shape=document.createElementNS(this.ns,'path');
        shape.setAttribute("d", d);
        shape.setAttribute("stroke", strokeColor);
        shape.setAttribute("fill", fillColor);
        this.svg.appendChild(shape);
    }
}