let villians=["Thanos","Dr.Doom","Taskmaster","Loki(2012)","Kang","Infinity Ultron","Kilmonger","Dormammu","Hela","Red Skull","Doctor Octopus","Green Goblin","Sandman","Lizard","Mystrio","Electro","Venom","Abomination"];
let heros=["Iron Man","Spider-Man","Captian America","Hulk","Thor","Black Widow","Hawkeye","Quicksilver","The Scarlet Witch","Vision","Doctor Strange","Wong","America Chavez","Black Panther","Star Lord","Drax","Gamora","Groot","Mantis","Rocket Raccoon","Nebula(2019-Endgame)","Loki(2018-Infinity War)","Ant-Man","Wasp","Shang-Chi","Captian Marvel","Ms.Marvel","Moonknaight","She-Hulk","Falcon","Winter Soldier"];

const btnVillian=document.getElementById("btnVillian");
const villian=document.getElementById("dusman");

const btnHero=document.getElementById("btnSuperHero");
const hero1=document.getElementById("hero1");
const hero2=document.getElementById("hero2");
const hero3=document.getElementById("hero3");
const hero4=document.getElementById("hero4");
const hero5=document.getElementById("hero5");
const hero6=document.getElementById("hero6");

btnVillian.addEventListener("click", ()=>{
    let villianSayi=Math.floor(Math.random()*18);
    villian.innerHTML=villians[villianSayi];
})

btnHero.addEventListener("click", ()=>{
    let sayi1=Math.floor(Math.random()*27);
    hero1.innerHTML=heros[sayi1];

    let sayi2=Math.floor(Math.random()*27);
    hero2.innerHTML=heros[sayi2];

    let sayi3=Math.floor(Math.random()*27);
    hero3.innerHTML=heros[sayi3];

    let sayi4=Math.floor(Math.random()*27);
    hero4.innerHTML=heros[sayi4];

    let sayi5=Math.floor(Math.random()*27);
    hero5.innerHTML=heros[sayi5];

    let sayi6=Math.floor(Math.random()*27);
    hero6.innerHTML=heros[sayi6];
})