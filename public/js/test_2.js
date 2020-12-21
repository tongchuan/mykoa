window.addEventListener('storage',function(e){
    console.log(e)
})

setTimeout(()=>{
  window.localStorage.setItem('a', 1000)
}, 1000);
setInterval(()=>{
window.localStorage.setItem('a', Math.random())
}, 1000);
