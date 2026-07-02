const U="bhavana@22",P="Sai@0307";
const msg=`My dear girl,

Today is all about celebrating YOU.

I don't know why u become this much special to me...🫶

Unknowingly Uh became an addictive drug to me, you are always be my special girl..🥰

Wherever you are, I want only the thing to see your happiness in every moment😍

Happy 22nd Birthday dear ❤️

LY😘🫂`;
function show(id){document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");}
function login(){if(user.value===U&&pass.value===P){show("loading");setTimeout(()=>show("gift"),2200);}else error.textContent="Wrong username or password ❤️";}
function openGift(){show("surprise");let i=0;const el=letter;(function t(){if(i<msg.length){el.textContent+=msg[i++];setTimeout(t,35);}})();music.play().catch(()=>{});confetti({particleCount:250,spread:120});}
function toggleMusic(){music.paused?music.play():music.pause();}