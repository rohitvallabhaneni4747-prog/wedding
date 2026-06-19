// Wedding Countdown

const weddingDate =
new Date("July 03, 2026 20:26:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance =
weddingDate - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(distance%(1000*60))
/
1000
);

document.getElementById("days").innerText=days;
document.getElementById("hours").innerText=hours;
document.getElementById("minutes").innerText=minutes;
document.getElementById("seconds").innerText=seconds;

if(distance<0){

document.getElementById("countdown").innerHTML=
`
<h1>
🎉 Today Is Our Wedding Day 🎉
</h1>
`;

}

}

setInterval(updateCountdown,1000);

updateCountdown();


// Open Invitation

const openBtn =
document.getElementById("openInvite");

const music =
document.getElementById("music");

openBtn.addEventListener("click",()=>{

document.getElementById("welcome")
.style.display="none";

music.play();

window.scrollTo({
top:0,
behavior:'smooth'
});

});


// Falling Petals

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML="🌸";

petal.style.left =
Math.random()*100 + "vw";

petal.style.animationDuration =
(5 + Math.random()*5) + "s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,500);


// Wedding Day Fireworks

const today =
new Date();

if(
today.getDate()===3 &&
today.getMonth()===6 &&
today.getFullYear()===2026
){

alert(
"🎉 Today Is Our Wedding Day 🎉"
);

}