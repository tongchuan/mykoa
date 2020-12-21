class Time{
  constructor(time){
    this.startTime = time;
    this.lastTime;
    this.elapsedTime;
  }
  getElapsedTime(){
    this.lastTime = Date.now()
    this.elapsedTime = (this.startTime - this.lastTime) * -1;
    return this.elapsedTime;
  }
}

class Canvas{
  construtor(bool){
    this.canvas = document.createElement('canvas')
    if(bool===true){
      this.canvas.style.display='block';
      this.canvas.style.top= 0;
      this.canvas.style.left = 0;
      document.getElementsByTagName('body')[0].appendChild(this.canvas)
    }
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width = window.innerWith
    this.height = this.canvas.height = window.innerHeight;
    this.mouseX = null;
    this.mouseY = null;
    this.trees = []
    this.xPos = 0;
    this.sunNum = 10;
    this.suns = []
    this.groundNum = 1;
    this.grounds = []
    this.carNum = 1;
    this.cars = []
    this.birdNum = 10;
    this.birds = []
    this.time = new Time(new Date())
    this.g = {
      one:0,
      two: 33.3,
      three: 66.6
    }
    this.carBehavior =0;
  }

  init(){

  }

  render(){

  }

  resize(){
    
  }
}

function gradientBackground(){

}

(function(){
  window.addEventListener('load',function(){
    canvas = new Canvas(true);
    canvas.init();

    function render(){
      window.requestAnimationFrame(function(){
        gradientBackground();
        canvas.render();
        render();
      })
    }
    render()
    window.addEventListener('resize',function(){
      canvas.resize()
    },false)
  })
}());