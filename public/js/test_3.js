
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


function drawStrokeStyle(ctx){
    let gradient;
    // strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式.默认值#000000
    // context.strokeStyle=color|gradient|pattern;
    // color   指示绘图笔触颜色的 CSS 颜色值。默认值是 #000000。
    // gradient    用于填充绘图的渐变对象（线性或放射性）
    // pattern 用于创建 pattern 笔触的 pattern 对象
    ctx.strokeStyle="#0000ff"
    ctx.strokeRect(20,20,150,100);
    
    ctx.save()
    ctx.translate(0,120)
    gradient = ctx.createLinearGradient(0,0,170,0);
    gradient.addColorStop(0,"magenta")
    gradient.addColorStop(0.5,"blue")
    gradient.addColorStop(1,"red")
    ctx.strokeStyle=gradient;
    ctx.lineWidth=5;
    ctx.strokeRect(20,20,150,100)
    ctx.restore()

    ctx.save()
    ctx.translate(0,240)
    // translate() 方法重新映射画布上的 (0,0) 位置。
    // x   添加到水平坐标（x）上的值
    // y   添加到垂直坐标（y）上的值
    let radial = ctx.createRadialGradient(75,50,5,90,60,100)
    radial.addColorStop(0,'red')
    radial.addColorStop(1,'white')
    ctx.strokeStyle=radial
    ctx.lineWidth=5;
    ctx.strokeRect(20,20,150,100)
    ctx.restore()

    ctx.save()
    ctx.translate(0,360)
    ctx.font = "30px Verdana"
    // context.font="italic small-caps bold 12px arial";
    // font 属性设置或返回画布上文本内容的当前字体属性
    // font 属性使用的语法与 CSS font 属性相同。
    // 默认值： 10px sans-serif
    // font-style      规定字体样式。可能的值： normal | italic | oblique
    // font-variant    规定字体变体。可能的值： normal | small-caps
    // font-weight     规定字体的粗细。可能的值：normal | bold|bolder| lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
    // font-size / line-height 规定字号和行高，以像素计。
    // font-family 规定字体系列。
    // caption 使用标题控件的字体（比如按钮、下拉列表等）。
    // icon    使用用于标记图标的字体。
    // menu    使用用于菜单中的字体（下拉列表和菜单列表）。
    // message-box 使用用于对话框中的字体。
    // small-caption   使用用于标记小型控件的字体。
    // status-bar  使用用于窗口状态栏中的字体。


    gradient = ctx.createLinearGradient(0,0,200,0)
    gradient.addColorStop(0,"magenta")
    gradient.addColorStop(0.5,"blue")
    gradient.addColorStop(1,"red")
    ctx.strokeStyle=gradient;
    ctx.strokeText("w3school.com.cn",10,50)
}

function drawShadowColor(ctx){
    ctx.shadowBlur=20;
    ctx.shadowColor="red"//"black"
    ctx.fillStyle="blue"
    ctx.fillRect(20,20,100,80)
}

function drawSun(ctx,sun,moon,earth){
    let {width,height} = ctx.canvas
    ctx.clearRect(0,0,width,height);


    // 

    ctx.fillStyle='rgba(0,0,0,0.4)'
    ctx.strokeStyle='rgba(0,153,255,0.4)';
    ctx.fillRect(0,0,width,height)
    ctx.save()
    
    ctx.translate(width/2,height/2);
    ctx.drawImage(sun,0,0,300,300);
    // earth
    let time = new Date();
    ctx.rotate(((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds())
    ctx.translate(105,0);
    ctx.fillRect(0,12,50,24);
    ctx.drawImage(earth,-12,-12)

    ctx.save()
    ctx.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds())
    ctx.translate(0,28.5)
    ctx.drawImage(moon,-3.5,-3.5)
    ctx.restore()



    ctx.restore()
    

    ctx.beginPath();
    ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
    ctx.stroke()

}

function drawFiveStar(context){
    context.save()
    let R1 = 150
    let R2 = 75
    context.translate(300,300)
    context.rotate(Math.PI/180*40)
    context.beginPath();
    for (var i = 0;i < 5;i++) {
       context.lineTo(Math.cos( (18+i*72-30)/180*Math.PI )*R1 , -Math.sin( (18+i*72-30)/180*Math.PI )*R1 );
       context.lineTo(Math.cos( (54+i*72-30)/180*Math.PI )*R2, -Math.sin( (54+i*72-30)/180*Math.PI )*R2 );
    }  //30旋转弧度
    context.closePath();
    context.fillStyle = "red";
    context.fill();
    context.stroke();
    context.restore()
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
    this.sun = new Image()
    this.moon = new Image()
    this.earth = new Image()
  }

  init(){
    this.num=5
    // drawFillStyle(this.ctx)
    // drawStrokeStyle(this.ctx)
    // drawShadowColor(this.ctx)
    this.sun.src = './img/Canvas_sun.png';
    this.moon.src = './img/Canvas_moon.png';
    this.earth.src = './img/Canvas_earth.png';

    drawFiveStar(this.ctx)
  }

  render(){
    // drawSun(this.ctx,this.sun,this.moon,this.earth)




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