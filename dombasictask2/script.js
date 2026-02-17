var arr = [
    {
        team:'CSK',
        primary:'#f4c430',
        secondary:'#1f3a93',
        captain:'Ruturaj Gaikwad',
        fullname:'Chennai Super Kings',
    },
    {
        team:'MI',
        primary:'#1e3a8a',
        secondary:'#d4af37',
        captain:'Hardik Pandya',
        fullname:'Mumbai Indians',
    },
    {
        team:'RCB',
        primary:'#b91c1c',
        secondary:'#111827',
        captain:'Faf du Plessis',
        fullname:'Royal Challengers Bengaluru',
    },
    {
        team:'KKR',
        primary:'#4c1d95',
        secondary:'#eab308',
        captain:'Shreyas Iyer',
        fullname:'Kolkata Knight Riders',
    },
    {
        team:'DC',
        primary:'#1d4ed8',
        secondary:'#dc2626',
        captain:'Rishabh Pant',
        fullname:'Delhi Capitals',
    },
    {
        team:'LSG',
        primary:'#0f172a',
        secondary:'#f97316',
        captain:'KL Rahul',
        fullname:'Lucknow Super Giants',
    },
    {
        team:'SRH',
        primary:'#ea580c',
        secondary:'#1f2937',
        captain:'Pat Cummins',
        fullname:'Sunrisers Hyderabad',
    },
    {
        team:'RR',
        primary:'#f472b6',
        secondary:'#1e40af',
        captain:'Sanju Samson',
        fullname:'Rajasthan Royals',
    },
    {
        team:'PBKS',
        primary:'#dc2626',
        secondary:'#9ca3af',
        captain:'Shikhar Dhawan',
        fullname:'Punjab Kings',
    },
    {
        team:'GT',
        primary:'#1e293b',
        secondary:'#d4af37',
        captain:'Shubman Gill',
        fullname:'Gujarat Titans',
    },
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')
btn.addEventListener('click',function(){
    var winner=arr[Math.floor(Math.random()*arr.length)]
   h1.innerHTML = `
        Team: ${winner.team} <br>
        Full Name: ${winner.fullname} <br>
        Captain: ${winner.captain}`
    h1.style.backgroundColor=winner.secondary
    main.style.backgroundColor=winner.primary
})