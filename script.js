window.onload=function(){

let role=localStorage.getItem("role");

document.getElementById("userRole").innerHTML="Logged in as : "+role;

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function addToCart(name, price){

cart.push({name,price});

saveCart();

}

function displayCart(){

let list=document.getElementById("cartList");

let total=0;

list.innerHTML="";

cart.forEach((item,index)=>{

total+=item.price;

list.innerHTML+=`
<li>
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">Remove</button>
</li>
`;

});

document.getElementById("total").innerText=total;

}

function removeItem(index){

cart.splice(index,1);

saveCart();

}

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}
function checkout(){

    if(cart.length==0){
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    cart=[];

    saveCart();

}
function logout(){

    localStorage.removeItem("role");

    window.location.href="index.html";

}