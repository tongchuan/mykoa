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
  }

  render(){
    this.ctx.clearRect(0,0,this.width,this.height)
    this.ctx.strokeRect(0,0,this.width,this.height)

    for (var i = 0; i < 1000 ; i++) {
      this.ctx.save()
      this.ctx.translate(10*i,10*i);
    //   this.num+=5
    //   console.log(this.num);
    //   this.ctx.scale((this.width-this.num)/this.width,(this.height-this.num)/this.height)
      this.ctx.scale(0.95/i,0.95/i)
      this.ctx.strokeRect(0,0,this.width,this.height)
      this.ctx.restore()
    }
    
     this.ctx.scale(1,1)
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