let dish_one = document.querySelector(".dish_one");
let dishes = ["Plain Dosa", "Bread Pakoda", "Club Sandwish"];
dish_one.innerHTML = dishes[0];
let prices = [99, 22, 45, 70, 40, 120, 150, 120,50, 150, 60, 20]

let totalPrice = 0;


let price1 = Number(document.querySelector("#price1").innerHTML )
let price2 = Number(document.querySelector("#price2").innerHTML)
let price3 = Number(document.querySelector("#price3").innerHTML)
let price4 = Number(document.querySelector("#price4").innerHTML)
let price5 = Number(document.querySelector("#price5").innerHTML)
let price6 = Number(document.querySelector("#price6").innerHTML)
let price7 = Number(document.querySelector("#price7").innerHTML)
let price8 = Number(document.querySelector("#price8").innerHTML)
let price9 = Number(document.querySelector("#price9").innerHTML)
let price10 = Number(document.querySelector("#price10").innerHTML)
let price11 = Number(document.querySelector("#price11").innerHTML)
let price12 = Number(document.querySelector("#price12").innerHTML)


let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
let c5 = document.getElementById("c5")
let c6 = document.getElementById("c6")
let c7 = document.getElementById("c7")
let c8 = document.getElementById("c8")
let c9 = document.getElementById("c9")
let c10 = document.getElementById("c10")
let c11 = document.getElementById("c11")
let c12 = document.getElementById("c12")

function check() {


    totalPrice = 0; 

    if (c1.checked) {
        totalPrice += price1
    }
    if (c2.checked) {
        totalPrice += price2
    }
    if (c3.checked) {
        totalPrice += price3
    }
    if (c4.checked) {
        totalPrice += price4
    }
    if (c5.checked) {
        totalPrice += price5
    }
    if (c6.checked) {
        totalPrice += price6
    }
    if (c7.checked) {
        totalPrice += price7
    }
    if (c8.checked) {
        totalPrice += price8
    }
    if (c9.checked) {
        totalPrice += price9
    }
    if (c10.checked) {
        totalPrice += price10
    }
    if (c11.checked) {
        totalPrice += price11
    }
    if (c12.checked) {
        totalPrice += price12
    }
  
    calculate();
    
   
}  

let total_bill = document.querySelector(".total_bill");
function calculate(){
    total_bill.innerHTML = `®️${totalPrice.toFixed(2)}`;
}

function clearBill() {
    totalPrice = 0; 
    total_bill.innerHTML = ""; 
    c1.checked = false
    c2.checked = false
    c3.checked = false
    c4.checked = false
    c5.checked = false
    c6.checked = false
    c7.checked = false
    c8.checked = false
    c9.checked = false
    c10.checked = false
    c11.checked = false
    c12.checked = false
}


window.onload=function(){
    gettime();
}
function gettime(){
    var cl = new Date();
    var h = cl.getHours();
    var m = cl.getMinutes();
    var s = cl.getSeconds();
    document.querySelector('.time').innerHTML= h+":"+m+":"+s;
setInterval("gettime()",1000);
}