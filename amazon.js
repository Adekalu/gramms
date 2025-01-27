$(".menu-btn").click(function(){
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
});

document.onclick = function(e){
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
        $(".menu").removeClass("active");
        $(".menu-btn i").removeClass("active");
    }
};




let cart = [];
let totalPrice = 0;

function addToCart(product,price) {
    cart.push({product,price});
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product}- $${item.price}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
   // cartCount.textContent= '(${cart.length})';

}



function resetCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
}






