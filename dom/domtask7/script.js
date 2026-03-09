// var chutki = document.querySelector('img')
// var msg = document.querySelector('h2 span')
// chutki.addEventListener('mouseenter',function(){
//     msg.innerHTML=' Chutki se door ho jaa.';
// })
// chutki.addEventListener('mouseleave',function(){
//     msg.innerHTML=' Good! Ab door hi rehna.';
// })
// var main = document.querySelector('#main')
// var cursor = document.querySelector('#cursor')
// main.addEventListener('mousemove',function(dets){
//     cursor.style.left = dets.x + 'px'
//     cursor.style.top = dets.y + 'px'
// })
var keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
    key.addEventListener('click',function(){
        let note = key.dataset.note;
        let audio = new Audio("sounds/" + note + ".mp3");
        audio.currentTime = 0;
        audio.play();
    });
});

document.addEventListener('keydown',function(event){
    let key = event.key.toLowerCase();
    playSound(key);
});

function playSound(key){
    let notes = {
        a: "C4",
        s: "D4",
        d: "E4",
        f: "F4",
        g: "G4",
        h: "A4",
        j: "B4",
        k: "C5",
        l: "D5",
        m:"E5",
        n: "F5",
        b: "G5",
        v: "A5",
        c:"B5",
        e: "Db4",
        r: "Eb4",
        t: "Gb4",
        u: "Ab4",
        alt: "Bb4",
        enter:"Db5",
        shift:"Eb5",
        "9": "Gb5",
        "5": "Ab5",
        "2": "Bb5"
    };
    let note = notes[key];
    if(note){
        let audio = new Audio("sounds/" + note + ".mp3");
        audio.currentTime = 0;
        audio.play();
    }

}
