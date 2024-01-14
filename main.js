let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    cartItemsDiv.innerHTML = "";
    total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    totalSpan.innerText = total.toFixed(2);
}
