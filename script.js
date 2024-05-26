



let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monesterhealth;
let invetory=['stick'];
const buttton1=document.querySelector('#button1');
const buttton2=document.querySelector('#button2');
const buttton3=document.querySelector('#button3');
const text=document.querySelector('#text');
const xptext=document.querySelector('#xptext');
const healthText=document.querySelector('#healthtext');
const  goldText=document.querySelector('#goldtext');
const monesterstats=document.querySelector('#monesterstats');
const monesternametext=document.querySelector('#monestername');
const monesterhealthtext=document.querySelector('#monsterhealth');
location =[
          {
            name:"town squre",
            'button text':['go to store','go to cave','fight dragon'],
            "button function":[goStore,gocave,fightdragone],
            text:"you are in the town squre. you see a sing that say \"store.\""
          },
          {
            name:"store",
            "button text":["buy 10 health (10 gold)","buy weapon (30 gold)","go to town square"],
            "button text":[buyHealth,buyWeapon,gotown],
            text:" you anter the store"


          }


]
   //innitialize button 
   buttton1.onclick=goStore;
   buttton2.onclick=gocave;
   buttton3.onclick=fightdragone;
   //
   function update(location) {
    buttton1.innerHTML=location['button text']['go to store'];
    buttton2.innerHTML="buy weapon (30 gold)";
    buttton3.innerHTML="go to town square";
    buttton1.onclick=buyHealth;
    buttton2.onclick=buyWeapon;
    buttton3.onclick=gotown;
    text.innerText="you  are in the town squre. you see a sing that \"store\"";
           
    
   }
   function gotown(params) {
           update(location[0])
    
    
   }
   function goStore(params) {
    
    
   }

   function gocave(params) {
    
   } 
function fightdragone(params) {
    
}

function buyHealth(params) {
    
}
function buyWeapon(params) {
    
}
