let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

// CART COUNT
function updateCartCount() {
  let count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

// OPEN CART
function openCart() {
  window.location.href = "cart.html";
}

// DISPLAY CART
if (document.getElementById("cart-items")) {
  let total = 0;
  let div = document.getElementById("cart-items");
  div.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    div.innerHTML += `
      <p>${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">❌</button></p>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// CHECKOUT
function goCheckout() {
  window.location.href = "checkout.html";
}

// PLACE ORDER
function placeOrder() {
  alert("🎉 Order Placed Successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  localStorage.setItem("loggedIn", "true");
  alert("Login successful!");
  window.location.href = "index.html";
}

// REGISTER
function register() {
  alert("Registration successful! Please login.");
}

// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

updateCartCount();
