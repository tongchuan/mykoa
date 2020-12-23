window.addEventListener('storage',function(e){
    console.log(e)
})
// window.onstorage=function(args){
//   console.log(args);
// }
// setTimeout(()=>{
//   window.localStorage.setItem('a', 1000)
// }, 5000);
setInterval(()=>{
  window.localStorage.setItem('a',' Math.random()')
}, 5000);
