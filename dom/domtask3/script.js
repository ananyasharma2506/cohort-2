let arr = ['Great things never come from comfort zones',
    'If it does not challenge you then it would not change you',
    'Do not let anybody work harder than you do',
    'Stay focused and trust the process',
    'Do it for your future self',
    'Small steps are better than no steps',
    'Take the risk or lose the chance',
    'It is better to try and fail than to not try at all',
    'The future depends on what you do today',
    'A goal without action is just a wish',
    'The effort you put in today will define your tomorrow'
]
var btn = document.querySelector('button')
var main = document.querySelector('main')
btn.addEventListener('click',function(){
    var h1 = document.createElement('h1')
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    var scl = Math.random()*3
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    var a = Math.floor(Math.random()*arr.length)
    h1.innerHTML=arr[a]
    h1.style.position = 'absolute'
    h1.style.left=x+'%'
    h1.style.top=y+'%'
    h1.style.rotate=rot+'deg'
    h1.style.scale=scl
    h1.style.color=`rgb(${c1},${c2},${c3})`
    main.appendChild(h1)
})