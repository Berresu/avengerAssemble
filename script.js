let villians=["Thanos","Dr.Doom","Taskmaster","Loki(2012)","Kang","Infinity Ultron","Killmonger","Dormammu","Hela","Red Skull","Doctor Octopus","Green Goblin","Sandman","Lizard","Mysterio","Electro","Venom","Abomination"];
let villianResimler=["image/thanos","images/dr.Doom","images/taskmaster","images/loki(2012)","images/kang","images/infinityUltron","images/killmonger","images/dormammu","images/hela","images/redSkull","images/doctorOctopus","images/greenGoblin","images/sandman","images/lizard","images/mysterio","images/electro","images/venom","images/abomination"];
let heros=["Iron Man","Spider-Man","Captian America","Hulk","Thor","Black Widow","Hawkeye","Quicksilver","The Scarlet Witch","Vision","Doctor Strange","Wong","America Chavez","Black Panther","Star Lord","Drax","Gamora","Groot","Mantis","Rocket Raccoon","Nebula(2019-Endgame)","Loki(2018-Infinity War)","Ant-Man","Wasp","Shang-Chi","Captian Marvel","Ms.Marvel","Moon Knight","She-Hulk","Falcon","Winter Soldier"];
let heroResimler=["images/ironMan","images/spiderman","images/captainAmerica","images/hulk","images/thor","images/blackWidow","images/hawkeye","images/quicksilver","images/theScarletWitch","images/vision","images/doctorStrange","images/wong","images/americaChavez","images/blackPanther","images/starLord","images/drax","images/gamora","images/groot","images/mantis","images/rocketRaccoon","images/nebula","images/loki(2018)","images/antman","images/wasp","images/shangchi","images/captainMarvel","images/msMarvel","images/monKnight","images/sheHulk","images/falcon","images/winterSoldier"];

const btnVillian=document.getElementById("btnVillian");
const villian=document.getElementById("dusman");
const resim=document.getElementById("resimVillian");

const btnHero=document.getElementById("btnSuperHero");
const hero1=document.getElementById("hero1");
const hero2=document.getElementById("hero2");
const hero3=document.getElementById("hero3");
const hero4=document.getElementById("hero4");
const hero5=document.getElementById("hero5");
const hero6=document.getElementById("hero6");
const resim1=document.getElementById("resim1");
const resim2=document.getElementById("resim2");
const resim3=document.getElementById("resim3");
const resim4=document.getElementById("resim4");
const resim5=document.getElementById("resim5");
const resim6=document.getElementById("resim6");

btnVillian.addEventListener("click", ()=>{
    let villianSayi=Math.floor(Math.random()*18);
    villian.innerHTML=villians[villianSayi];
    resim.setAttribute("src",villianResimler[villianSayi]);
})

btnHero.addEventListener("click", ()=>{
    let sayi1=Math.floor(Math.random()*27);
    hero1.innerHTML=heros[sayi1];
    resim1.setAttribute("src",heroResimler[sayi1]);

    let sayi2=Math.floor(Math.random()*27);
    hero2.innerHTML=heros[sayi2];
    resim2.setAttribute("src",heroResimler[sayi2]);

    let sayi3=Math.floor(Math.random()*27);
    hero3.innerHTML=heros[sayi3];
    resim3.setAttribute("src",heroResimler[sayi3]);

    let sayi4=Math.floor(Math.random()*27);
    hero4.innerHTML=heros[sayi4];
    resim4.setAttribute("src",heroResimler[sayi4]);

    let sayi5=Math.floor(Math.random()*27);
    hero5.innerHTML=heros[sayi5];
    resim5.setAttribute("src",heroResimler[sayi5]);

    let sayi6=Math.floor(Math.random()*27);
    hero6.innerHTML=heros[sayi6];
    resim6.setAttribute("src",heroResimler[sayi6]);
})
