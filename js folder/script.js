
document.addEventListener('DOMContentLoaded', start) 
function start(){ 
    


const mobilemenu=document.querySelector('.menu');
const mode=document.querySelector('.mode');

const itemTitle= document.querySelectorAll('.itemTitle');
const itemDes= document.querySelectorAll('.itemDesc');
if (localStorage.getItem('day')) {
    mode.classList.remove('night');
        mode.classList.add('day');
        mode.src="img folder/daymode.jpg"
       
        document.body.style.backgroundColor="white";
        itemTitle.forEach(title=>{
            if (title.classList.contains('night')) {
                title.classList.remove('night');
                title.classList.add('day');
            }
        })
        itemDes.forEach(des=>{
            if (des.classList.contains('night')) {
                des.classList.remove('night');
                des.classList.add('day');
            }
        })
}
else{
    mode.classList.remove('day');
mode.classList.add('night');
mode.src="img folder/nightmode.jpg"
document.body.style.backgroundColor="#1a191e";
itemTitle.forEach(title=>{
    if (title.classList.contains('day')) {
        title.classList.remove('day');
        title.classList.add('night');
    }
})
itemDes.forEach(des=>{
    if (des.classList.contains('day')) {
        des.classList.remove('day');
        des.classList.add('night');
    }
})
}

const cart=document.querySelector('.cart');
const btncart=document.querySelectorAll('.btnAddCart');
let mybutton = document.getElementById("scrol-btn");

const panels = document.querySelectorAll('.panel');
const bookcontainer= document.querySelectorAll('.container');
const rightarrow=document.querySelectorAll('.rightArrow');
const leftarrow=document.querySelectorAll('.leftArrow');

btncart.forEach(btn=>{
    btn.addEventListener('click',()=>{
        window.location.href="pay.html";
    })
})
mobilemenu.addEventListener('click',function () {
    if(document.querySelector('.mobileNav').    classList.contains('active')){
        document.querySelector('.mobileNav').  classList.remove('active');
    }else{
        document.querySelector('.mobileNav').  classList.add('active');
    }
})
panels.forEach(panel=>{

    panel.addEventListener('click',()=>{
        removeActive();
        panel.classList.toggle('active');
         
    })
   
})
function showPage(page) {
    
    // Hide all of the divs:
    document.querySelectorAll('.shopItemSec').forEach(div => {
        div.style.display = 'none';
    });
    
    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'block';
}

function removeActive(){
    panels.forEach(panel=>{
        
        if(panel.classList.contains('active')){
            panel.classList.remove('active');
        }
    })
}


document.querySelectorAll('.btnPage').forEach(button => {
    
    
    button.onclick = function() {
        showPage(this.dataset.page);
    }
})
mode.addEventListener('click',function (){//Dark mode and light mode switch
    if(mode.classList.contains('night')){
        if (localStorage.getItem('night')) {
            localStorage.removeItem('night');
        }
        localStorage.setItem('day','day');
        mode.classList.remove('night');
        mode.classList.add('day');
        mode.src="img folder/daymode.jpg"
        document.body.style.backgroundColor="white";
        itemTitle.forEach(title=>{
        if (title.classList.contains('night')) {
            title.classList.remove('night');
             title.classList.add('day');
        }
        })
        itemDes.forEach(des=>{
            if (des.classList.contains('night')) {
                des.classList.remove('night');
                des.classList.add('day');
            }
        })
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
        itemTitle.forEach(title=>{
    if (title.classList.contains('day')) {
        title.classList.remove('day');
        title.classList.add('night');
        }
})
    itemDes.forEach(des=>{
    if (des.classList.contains('day')) {
        des.classList.remove('day');
        des.classList.add('night');
    }
})
}
})

cart.addEventListener('click',function(){
    window.location.href="pay.html";
   
})

function topFunction() {
  document.documentElement.scrollTop = 0;
}
bookcontainer.forEach((book,i)=>{
    let containerdimension=book.getBoundingClientRect();
    let containerw = containerdimension.width-10;

    rightarrow[i].addEventListener('click', () => {
        book.scrollLeft += containerw;
    })

    leftarrow[i].addEventListener('click', () => {
        book.scrollLeft -= containerw;
    })
})
/* //match credit card numberItems
   document.getElementById('payBtn').addEventListener('click',function(){
    let patt=/^((5[1-5][0-9]{2})|(222[1-9])|(22[3-9][0-9])|(2[3-6][0-9]{2})|(27[01][0-9])|2720)[0-9]{12}$/
const creditCard=document.getElementById('cardNumber').value;
if (!creditCard.match(patt)) {
    //alert('all bad')
}
else{
    //alert('all good')
}
//match credit card cvv

   })
   document.getElementById('pay').addEventListener('click',function(){
    let pattcv=/^(?=.*[0-9]).{3}$/
const creditcvv=document.getElementById('cardCode').value;
if (!creditcvv.match(pattcv)) {
    alert('all bad')
}
else{
    alert('all good')
}


   }) */
    

} 

