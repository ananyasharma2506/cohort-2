// var chutki = document.querySelector('img')
// var msg = document.querySelector('h2 span')
// chutki.addEventListener('mouseenter',function(){
//     msg.innerHTML=' Chutki se door ho jaa.';
// })
// chutki.addEventListener('mouseleave',function(){
//     msg.innerHTML=' Good! Ab door hi rehna.';
// })
var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
main.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
})