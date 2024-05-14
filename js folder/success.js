
 
document.addEventListener('DOMContentLoaded', start) 
function start(){ 


  const sec=3000;

   document.getElementById("cardConfirmationInfo").innerHTML = "Thank you for your payment with the card ***"+ " " +localStorage.getItem("lastdigits")+ " returning to main page in 3 seconds.";
   
   window.setTimeout(returntoindex, sec);

   function returntoindex(){
    window.location.href="index.html"; 
   }
const cardcontainer=document.querySelector('.cardConfirmation');
const mode=document.querySelector('.mode');
const cart=document.querySelector('.cart');
const mobilemenu=document.querySelector('.menu');
const addItem=document.querySelectorAll('.buy');
let mybutton = document.getElementById("scrol-btn");
let itms=0;
const bookcontainer= document.querySelectorAll('.container');
const rightarrow=document.querySelectorAll('.rightArrow');
const leftarrow=document.querySelectorAll('.leftArrow');
var cartbasket=document.getElementById("product-list");
let productCart={};
if (localStorage.getItem('day')) {
    mode.classList.remove('night');
        mode.classList.add('day');
        mode.src="img folder/daymode.jpg"
        document.body.style.backgroundColor="white";
        cardcontainer.style.color="black";
}
else{
    mode.classList.remove('day');
mode.classList.add('night');
mode.src="img folder/nightmode.jpg"
document.body.style.backgroundColor="#1a191e";
cardcontainer.style.color="white";

}
mobilemenu.addEventListener('click',function () {
    if(document.querySelector('.mobileNav').    classList.contains('active')){
        document.querySelector('.mobileNav').  classList.remove('active');
    }else{
        document.querySelector('.mobileNav').  classList.add('active');
    }
})
   
function showPage(page) {

    // Hide all of the divs:
    document.querySelectorAll('.shopItemSec').forEach(div => {
        div.style.display = 'none';
    });

    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'block';
}

document.querySelectorAll('button').forEach(button => {

   
    button.onclick = function() {
        showPage(this.dataset.page);
    }
})

mode.addEventListener('click',function(){
    if(mode.classList.contains('night')){
        if (localStorage.getItem('night')) {
            localStorage.removeItem('night');
        }
        localStorage.setItem('day','day');
    mode.classList.remove('night');
    mode.classList.add('day');
    mode.src="img folder/daymode.jpg"
    document.body.style.backgroundColor="white";
    cardcontainer.style.color="black";
    }
    else{
        if (localStorage.getItem('day')) {
            localStorage.removeItem('day');
        }
        localStorage.setItem('night','night');
        mode.classList.remove('day');
    mode.classList.add('night');
    mode.src="img folder/nightmode.jpg"
    document.body.style.backgroundColor="#1a191e";
    cardcontainer.style.color="white";
    }
    })
    
    cart.addEventListener('click',function(){
        window.location.href="pay.html"; //links the browser to another html file
       
    })
}
  //  const getmoviedata=()=>{
