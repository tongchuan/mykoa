let canvas

class T1{
  constructor(ctx,dx,dy,s){
    this.ctx=ctx;
    this.dx = dx;
    this.dy = dy;
    this.s = s;
  }

  draw(){
    this.ctx.beginPath()
    this.ctx.fillStyle='rgb(100,255,100)'
    this.ctx.strokeStyle='rgb(0,0,100)'
    let x = Math.sin(0)
    let y = Math.cos(0)
    let dig = Math.PI/15*11
    for(let i=0;i<30;i++){
      let x = Math.sin(i*dig)
      let y = Math.cos(i*dig);
      this.ctx.lineTo(this.dx+x*this.s,this.dy+y*this.s)
    }
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.stroke()
  }
}

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
    this.drawNumber=1
    this.draws = []
    this.draws.push(new T1(this.ctx,150,150,100))
  }

  render(){
    this.ctx.clearRect(0,0,this.width,this.height)
    this.ctx.fillStyle = "rgba(33,66,99,05)"
    this.ctx.fillRect(0,0,this.width,this.height)
    this.draws.forEach((t1)=>{
      t1.draw()
    })
    console.log('render');
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