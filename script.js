// Credentials
const users = {
  user1: 'pass123',
  user2: 'pass456'
};

// Elements
const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('login-section');
const app = document.getElementById('app');
const errorMsg = document.getElementById('error-msg');
const menuContainer = document.getElementById('menu');
const filterSelect = document.getElementById('filter');
const form = document.getElementById('addItemForm');
const cartContainer = document.getElementById('cart-section');

const fallbackImage = 'https://via.placeholder.com/350x200.png?text=No+Image';

// Cart
let cart = [];

// Initial menu items
let menuItems = [
  {
    name: 'Tacos',
    description: 'Crispy corn tortillas filled with seasoned meat, salsa, and cheese.',
    price: '$5.99',
    category: 'taco',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85'
  },
  {
    name: 'Sushi',
    description: 'Fresh rolls of rice with salmon, avocado, and seaweed.',
    price: '$12.50',
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754'
  },
  {
    name: 'Shawarma',
    description: 'Grilled marinated meat sliced thinly, served in a warm pita with tahini, hummus, and fresh veggies.',
    price: '$8.75',
    category: 'shawarma',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPe_a6tU5ckjz7T8L78xZk_4c8k_lFNp-gg&s'
  },
  {
    name: 'Dumplings',
    description: 'Soft dough pockets filled with minced meat and vegetables.',
    price: '$6.00',
    category: 'dumpling',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092'
  }
];

// Login handling
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = loginForm.username.value.trim();
  const password = loginForm.password.value;
  if (users[username] === password) {
    loginSection.style.display = 'none';
    app.classList.remove('hidden');
    renderMenu();
    renderCart();
  } else {
    errorMsg.textContent = 'Invalid username or password!';
    errorMsg.style.color = 'red';
  }
});

// Render menu items
function renderMenu(filter = 'all') {
  menuContainer.innerHTML = '';
  let filtered = menuItems;
  if (filter !== 'all') {
    filtered = menuItems.filter(item => item.category === filter);
  }

  filtered.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.innerHTML = `
      <img src="${item.image}" onerror="this.src='${fallbackImage}'" alt="${item.name}">
      <div class="menu-details">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
        <button class="add-to-cart-btn" data-index="${idx}">Add to Cart</button>
      </div>
    `;
    menuContainer.appendChild(li);
  });

  // Attach add-to-cart listeners
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'), 10);
      const filterValue = filterSelect.value;
      let item;
      if (filterValue === 'all') {
        item = menuItems[index];
      } else {
        const filteredList = menuItems.filter(it => it.category === filterValue);
        item = filteredList[index];
      }
      addToCart(item);
    });
  });
}

filterSelect.addEventListener('change', function () {
  renderMenu(filterSelect.value);
});

// Handle new dish submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newItem = {
    name: form.name.value,
    description: form.description.value,
    price: form.price.value,
    category: form.category.value,
    image: form.image.value
  };
  menuItems.push(newItem);
  form.reset();
  renderMenu(filterSelect.value);
});

// Add to cart
function addToCart(item) {
  cart.push(item);
  renderCart();
}

// Render cart
function renderCart() {
  cartContainer.innerHTML = '<h2>🛒 Cart</h2>';
  let total = 0.0;
  if (cart.length === 0) {
    cartContainer.innerHTML += '<p>Your cart is empty.</p>';
  } else {
    const ul = document.createElement('ul');
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      ul.appendChild(li);
      const num = parseFloat(item.price.replace('$', ''));
      if (!isNaN(num)) total += num;
    });
    cartContainer.appendChild(ul);
    const totalLine = document.createElement('p');
    totalLine.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalLine);
  }
}
