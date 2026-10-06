let cart = [];

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function showInfo(title, text) {
  document.getElementById('i-title').innerText = title;
  document.getElementById('i-body').innerText = text;
  openModal('info-modal');
}

function loginUser() {
  closeModal('auth-modal');
  document.getElementById('hero-page').classList.add('hidden');
  document.getElementById('store-page').classList.remove('hidden');
}

function goToHome() {
  document.getElementById('store-page').classList.add('hidden');
  document.getElementById('hero-page').classList.remove('hidden');
}

function addToCart(name, price, selectId) {
  const size = document.getElementById(selectId).value;
  cart.push({ name, price, size });
  updateCart();
  document.getElementById('cart').classList.remove('hidden');
}

function removeCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;
  const list = document.getElementById('cart-list');
  list.innerHTML = '';
  let total = 0;
  
  cart.forEach((item, i) => {
    total += item.price;
    list.innerHTML += `
      <div class="cart-item">
        <div>
          <div>${item.name}</div>
          <small style="color:#aaa">${item.size} - ₱${item.price}</small>
        </div>
        <button class="btn-del" onclick="removeCart(${i})">X</button>
      </div>`;
  });
  document.getElementById('cart-total').innerText = '₱' + total.toFixed(2);
}