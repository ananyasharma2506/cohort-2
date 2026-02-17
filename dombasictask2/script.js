var arr = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'blue',
        captain:'Ruturaj Gaikwad',
        fullname:'Chennai Super Kings',
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold',
        captain:'Hardik Pandya',
        fullname:'Mumbai Indians',
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black',
        captain:'Faf du Plessis',
        fullname:'Royal Challengers Bengaluru',
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold',
        captain:'Shreyas Iyer',
        fullname:'Kolkata Knight Riders',
    },
    {
        team:'DC',
        primary:'blue',
        secondary:'red',
        captain:'Rishabh Pant',
        fullname:'Delhi Capitals',
    },
    {
        team:'LSG',
        primary:'blue',
        secondary:'orange',
        captain:'KL Rahul',
        fullname:'Chennai Super Kings',
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black',
        captain:'Pat Cummins',
        fullname:'Sunrisers Hyderabad',
    },
    {
        team:'RR',
        primary:'pink',
        secondary:'blue',
        captain:'Sanju Samson',
        fullname:'Rajasthan Royals',
    },
    {
        team:'PBKS',
        primary:'red',
        secondary:'silver',
        captain:'Shikhar Dhawan',
        fullname:'Punjab Kings',
    },
    {
        team:'GT',
        primary:'navy blue',
        secondary:'gold',
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