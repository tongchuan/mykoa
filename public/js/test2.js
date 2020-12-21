// var canvas = document.querySelector('mycanvas');
var canvas = document.getElementById('mycanvas');
console.log(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx = canvas.getContext('2d')
// ctx.beginPath();
// ctx.save()
// ctx.moveTo(0,0)
// ctx.lineTo(200,200)
// ctx.lineTo(100,500)
// ctx.closePath();
// ctx.stroke();//没有这个stroke()的话不会出现画布效果
let w=1,h=1,flag=true
function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height)	
	if(flag){
		w=100
		h=100
		flag=false
	}else{
		w=300
		h=300
		flag=true
	}
	console.log(w,h)
	// ctx.save()
	 ctx.beginPath();
	ctx.moveTo(0,0)
	ctx.lineTo(w,h)
	ctx.stroke();
	// ctx.restore();
	setTimeout(draw,1000)
	// requestAnimationFrame(draw)
}

draw()