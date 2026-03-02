var grow = 0
var btn = document.querySelector('button')
var inner = document.querySelector('.inner')
var h2=document.querySelector('h2')
btn.addEventListener('click',function(){
    var num=50+Math.floor(Math.random()*50)
    btn.style.pointerEvents='none'
    var int = setInterval(()=>{
        grow++
        h2.innerHTML=grow+'%'
        inner.style.width=grow+'%'
    },num);
    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML='Downloaded'
        btn.style.opacity=0.8
       
    },num*100);
    
})