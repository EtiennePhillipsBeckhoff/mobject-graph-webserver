// Keep these lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="./../../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.752.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

class Widget_Blank extends WidgetBase {

    constructor() {
        super();
    };
    
    onDraw(ctx, node, widget_width, y, H) {
        var drawWidth = widget_width - this.margin * 2;

        // draw the outline
        ctx.strokeStyle = this.outline_color;
        ctx.fillStyle = this.background_color;
        ctx.beginPath();
        ctx.roundRect(this.margin, y, drawWidth, H, H * 0.5);
        ctx.fill();
        ctx.stroke();
    };
};
