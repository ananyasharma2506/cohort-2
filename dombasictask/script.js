var h2 = document.querySelector('h2')
var inc= document.querySelector('#inc')
var decs= document.querySelector('#decs')
var reset= document.querySelector('#reset')

let a = 0;
inc.addEventListener('click',function(){
    a++
    h2.innerHTML=a
})
decs.addEventListener('click',function(){
    a--
    h2.innerHTML=a
})
reset.addEventListener('click',function(){
    a=0
    h2.innerHTML=a
})

