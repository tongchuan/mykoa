
function drawFillStyle(ctx){
    // fillStyle属性设置或返回用于填充绘画的颜色、渐变或模式。
    // ctx.fillStyle=color|gradient|pattern
    // color 指示绘图填充色的CSS颜色值。默认值是#00000
    // gradient 用于填充绘图的渐变对象（线性或放射性）
    // pattern 用于填充绘图的pattern对象
    ctx.fillStyle="#0000ff";// 填充颜色
    ctx.fillRect(20,20,150,100)
    let gradient = ctx.createLinearGradient(20,140,170,120); 
    //context.createLinearGradient(x0,y0,x1,y1); 方法创建线性的渐变对象 渐变可用于填充矩形、圆形、线条、文本等等。
    // x0  渐变开始点的 x 坐标
    // y0  渐变开始点的 y 坐标
    // x1  渐变结束点的 x 坐标
    // y1  渐变结束点的 y 坐标
    gradient.addColorStop(0,'black') 
    //gradient.addColorStop(stop,color); 方法规定 gradient 对象中的颜色和位置。
    // stop  介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
    // color  在结束位置显示的 CSS 颜色值
    gradient.addColorStop(0.5,'red')
    gradient.addColorStop(1,"white")
    ctx.fillStyle=gradient;
    ctx.fillRect(20,140,150,100)

    // context.createRadialGradient(x0,y0,r0,x1,y1,r1); 方法创建放射状/圆形渐变对象。 渐变可用于填充矩形、圆形、线条、文本等等
    // x0  渐变的开始圆的 x 坐标
    // y0  渐变的开始圆的 y 坐标
    // r0  开始圆的半径
    // x1  渐变的结束圆的 x 坐标
    // y1  渐变的结束圆的 y 坐标
    // r1  结束圆的半径
    let radial = ctx.createRadialGradient(60,300,20,60,300,60)
    radial.addColorStop(0,'#00ff00')
    radial.addColorStop(0.5,'#0000ff')
    radial.addColorStop(1,'#000000')
    ctx.fillStyle=radial
    ctx.fillRect(20,260,150,100)

    let myimg = document.getElementById('myimg')
    let pattern = ctx.createPattern(myimg,'repeat')
    // context.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat");
    // image 规定要使用的图片、画布或视频元素。
    // repeat  默认。该模式在水平和垂直方向重复。
    // repeat-x  该模式只在水平方向重复。
    // repeat-y  该模式只在垂直方向重复。
    // no-repeat 该模式只显示一次（不重复）。
    ctx.fillStyle=pattern;
    ctx.rect(190,20,500,500)
    ctx.fill()
    // context.rect(x,y,width,height);
    // x 矩形左上角的 x 坐标
    // y 矩形左上角的 y 坐标
    // width 矩形的宽度，以像素计
    // height  矩形的高度，以像素计
}



let canvas;
class Canvas{
  constructor(){
    this.canvas = document.createElement('canvas')
    this.canvas.style.display='black'
    this.canvas.style.top=0;
    this.canvas.style.left=0;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d')
    document.getElementsByTagName('body')[0].appendChild(this.canvas)
  }

  init(){
    console.log('init');
    this.num=5
    // drawFillStyle(this.ctx)
  }

  render(){
    




    // this.ctx.clearRect(0,0,this.width,this.height)
    // this.ctx.strokeRect(0,0,this.width,this.height)

    // for (var i = 0; i < 1000 ; i++) {
    //   this.ctx.save()
    //   this.ctx.translate(10*i,10*i);
    // //   this.num+=5
    // //   console.log(this.num);
    // //   this.ctx.scale((this.width-this.num)/this.width,(this.height-this.num)/this.height)
    //   this.ctx.scale(0.95/i,0.95/i)
    //   this.ctx.strokeRect(0,0,this.width,this.height)
    //   this.ctx.restore()
    // }
    
    //  this.ctx.scale(1,1)
    // console.log('render');
  }

  resize(){
    console.log('resize')
  }
}

(function(){
  "use strict";
  console.log(1111);
  window.addEventListener('load',function(){
    canvas = new Canvas()
    canvas.init();
    function render(){
      window.requestAnimationFrame(function(){
        canvas.render()
        render()
      })
    }
    render()
    window.addEventListener('resize',function(){
      canvas.resize()
    })
  })
}());