
let btn =document.getElementById("rule")
let cls =document.getElementById("cancle")
let winSound = document.getElementById('win-sound');
let loseSound = document.getElementById('lose-sound');
let tieSound = document.getElementById('tie-sound');
let CupSound = document.getElementById('cup-sound');
let c =document.getElementById("cmarks")
let y =document.getElementById("ymarks")

let rul =document.querySelector(".rulebook")
let nxt =document.querySelector(".nextbtn")
let pa1 =document.querySelector(".page1")
let pa2 =document.querySelector(".page2")
let pa3 =document.querySelector(".page3")
let pa4 =document.querySelector(".page4")
let main =document.querySelector(".main")
let win =document.querySelector(".win")
let Pa =document.querySelector("#playagain")





// ====================================  Rule Book  ============================//
function rule(){
    setTimeout(() => {
        rul.style.transitionDuration = "1s";
        rul.style.marginLeft = "800px";
      },100);
    rul.style.display="flex"
}

function cancle(){
    setTimeout(() => {
        rul.style.display="none";
      },400);
    rul.style.transitionDuration = "1s";
    rul.style.marginLeft = "820px";
}


// ==================== local Storage and Reloade Functions ==================//



function updateScores() {
  localStorage.setItem('yscore', yscore);
  localStorage.setItem('cscore', cscore);
}



window.onload = function() {
  yscore = localStorage.getItem('yscore') ? parseInt(localStorage.getItem('yscore')) : 0;
  cscore = localStorage.getItem('cscore') ? parseInt(localStorage.getItem('cscore')) : 0;

  y.textContent = yscore;
  c.textContent = cscore;
};




// ==================================  Game Function  =============================================

var cp=[
  "stone",
  "paper",
  "scer"
]


function stone(){
 let i = Math.floor(Math.random() * 3);
 if(cp[i]=="paper"){
  loseSound.play(); 
  document.querySelector('#playerchoiceL').src ='/images/STONEPIC.png';
  document.querySelector('#computerchoiceL').src ='/images/PAPERPIC.png';
  pa1.style.display="none";
  pa3.style.display="flex";
  setTimeout(()=>{
    Pa.style.display="block";
    },750);
  cscore++; 
  c.textContent=cscore;
  updateScores();
 }
 else if(cp[i]=="scer"){
  winSound.play();
  document.querySelector('#playerchoice').src ='/images/STONEPIC.png';
  document.querySelector('#computerchoice').src ='/images/SCCER.png';
  pa1.style.display="none";
  pa2.style.display="flex";
  setTimeout(()=>{
    Pa.style.display="block";
    },750);
  yscore++;
  y.textContent=yscore;
  updateScores();
 }
else{
  tieSound.play();
  document.querySelector('#playerchoiceT').src ='/images/STONEPIC.png';
  document.querySelector('#computerchoiceT').src ='/images/STONEPIC.png';
  pa1.style.display="none";
  pa4.style.display="flex";
  setTimeout(()=>{
    Pa.style.display="block";
    },750);
}
if(yscore>cscore){
  nxt.style.display="flex";
  }
  else if(yscore<cscore){
  nxt.style.display="none";
}
}





function paper(){
  let i = Math.floor(Math.random() * 3);
  if(cp[i]=="scer"){
   loseSound.play(); 
   document.querySelector('#playerchoiceL').src ='/images/PAPERPIC.png';
   document.querySelector('#computerchoiceL').src ='/images/SCCER.png';
   pa1.style.display="none";
   pa3.style.display="flex";
   setTimeout(()=>{
    Pa.style.display="block";
    },750);
   cscore++; 
   c.textContent=cscore;
   updateScores();
  }
  else if(cp[i]=="stone"){
   winSound.play();
   document.querySelector('#playerchoice').src ='/images/PAPERPIC.png';
   document.querySelector('#computerchoice').src ='/images/STONEPIC.png';
   pa1.style.display="none";
   pa2.style.display="flex";
   setTimeout(()=>{
    Pa.style.display="block";
    },750);
   yscore++;
   y.textContent=yscore;
   updateScores();
  }
 else{
   tieSound.play();
   document.querySelector('#playerchoiceT').src ='/images/PAPERPIC.png';
   document.querySelector('#computerchoiceT').src ='/images/PAPERPIC.png';
   pa1.style.display="none";
   pa4.style.display="flex";
   setTimeout(()=>{
    Pa.style.display="block";
    },750);
 }
 if(yscore>cscore){
  nxt.style.display="flex";
  }
  else if(yscore<cscore){
  nxt.style.display="none";
 }
 }






  
function scer(){
  let i = Math.floor(Math.random() * 3);
  if(cp[i]=="stone"){
   document.querySelector('#playerchoiceL').src ='/images/SCCER.png';
   document.querySelector('#computerchoiceL').src ='/images/STONEPIC.png';
   pa1.style.display="none";
   pa3.style.display="flex";
   setTimeout(()=>{
    Pa.style.display="block";
    },750);
   loseSound.play(); 
   cscore++; 
   c.textContent=cscore;
   updateScores();
  }
  else if(cp[i]=="paper"){
   winSound.play();
   document.querySelector('#playerchoice').src ='/images/SCCER.png';
   document.querySelector('#computerchoice').src ='/images/PAPERPIC.png';
   pa1.style.display="none";
   pa2.style.display="flex";
   setTimeout(()=>{
    Pa.style.display="block";
    },750);
   yscore++;
   y.textContent=yscore;
   updateScores();
  }
 else{
   tieSound.play();
   document.querySelector('#playerchoiceT').src ='/images/SCCER.png';
   document.querySelector('#computerchoiceT').src ='/images/SCCER.png';
   pa1.style.display="none";
   pa4.style.display="flex";
   setTimeout(()=>{
    Pa.style.display="block";
    },750);
 }
 if(yscore>cscore){
  nxt.style.display="flex";
  }
  else if(yscore<cscore){
  nxt.style.display="none";
}
}

// =============================== Next and Playagain buttons ===========================

function next(){
  CupSound.play();
  win.style.display="flex";
  main.style.display="none";
  Pa.style.display="none";
  nxt.style.display="none";
  setTimeout(()=>{
    Pa.style.display="block";
  },1500);
  Pa.style.marginTop="610px";
}

function playagain(){
  main.style.display="block"
  pa1.style.display="flex";
  pa2.style.display="none";
  pa3.style.display="none";
  pa4.style.display="none";
  win.style.display="none";
  Pa.style.display="none";
  Pa.style.marginTop="480px";
 }



// localStorage.clear()


