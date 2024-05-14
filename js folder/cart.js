
  
document.addEventListener('DOMContentLoaded', start) 
function start(){ 



const mode=document.querySelector('.mode');
const cart=document.querySelector('.cart');
const mobilemenu=document.querySelector('.menu');

if (localStorage.getItem('day')) {
    mode.classList.remove('night');
        mode.classList.add('day');
        mode.src="img folder/daymode.jpg"
        document.body.style.backgroundColor="white";
        
}
else{
    mode.classList.remove('day');
mode.classList.add('night');
mode.src="img folder/nightmode.jpg"
document.body.style.backgroundColor="#1a191e";

}
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
    }
    })
    cart.addEventListener('click',function(){
        window.location.href="pay.html";
       
    })

    mobilemenu.addEventListener('click',function () {
        if(document.querySelector('.mobileNav').    classList.contains('active')){
            document.querySelector('.mobileNav').  classList.remove('active');
        }else{
            document.querySelector('.mobileNav').  classList.add('active');
        }
    })
if (localStorage.getItem("card")) {
    localStorage.removeItem("card");
    localStorage.removeItem("lastdigits");
    
}
const now = new Date();


const currentDateTime = now.toLocaleString();

console.log(currentDateTime);
 
   const payBtn=document.getElementById("payBtn");
   

  

   document.getElementById("payBtn").addEventListener("click", (e)=>{
    
    document.getElementById("formRes").innerHTML = "";
    let card=document.getElementById("cardNumber").value;    
    let year=document.getElementById("cardYear").value;    
    let month=document.getElementById("cardMonth").value; 
    let code=document.getElementById("cardCode").value;       
    code= code.toString();
    const expdate=new Date(year.toString()+"-"+month.toString());
    e.preventDefault();//stop the refresh browser
    let patt=/^((5[1-5][0-9]{2})|(222[1-9])|(22[3-9][0-9])|(2[3-6][0-9]{2})|(27[01][0-9])|2720)[0-9]{12}$/
    let pattcv=/^(?=.*[0-9]).{3,4}$/ 
    if (now>expdate) {
        alert('card expired')
        
        location.reload()
        return 0
    }
   if (!card.match(patt)) {
        alert('credit card not valid')
       
        location.reload()
        return 0
    }
  
    if (!code.match(pattcv)) {
        alert('cvv not valid')
        
        location.reload()
        return 0
    }
   

    console.log(card,year,month,code);
   
        localStorage.setItem("card",card);
        console.log("all good ");
        getlast4digits(card);
        const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard";
        const data ={
            "master_card": parseInt(card),
            "exp_year": parseInt(year),
            "exp_month": parseInt(month),
            "cvv_code":code
        };
        fetch(url, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
                /* return response.json(); */
             if (response.status === 200) {
                return response.json();
            }else if(response.status === 400){
                throw "BAD DATA SENT TO THE SERVER";
            }else{
                throw "SOMETHING WENT WRONG";
            } 
        })
        .then ((json)=>{
           console.log(json);
           document.getElementById("formRes").innerHTML = json["message"];
           location.href="success.html"; //set the location of the browser to another html file
        })
        .catch((error)=>{
             alert(error); 
            document.getElementById("formRes").innerHTML = error;
            document.getElementById("formRes").classList= "error";
        })
        
    

    });
    
    function getlast4digits(code){
        
       
      let   last_digit1 = code.charAt(code.length-1);
      let  last_digit2 = code.charAt(code.length-2);
      let   last_digit3 = code.charAt(code.length-3);
      let  last_digit4 = code.charAt(code.length-4);
       let d= last_digit4+last_digit3+last_digit2+last_digit1;
       console.log(d);
       localStorage.setItem("lastdigits",d);


       



    }
}
  
