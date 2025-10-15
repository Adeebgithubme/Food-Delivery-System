const users = { user1: 'pass123', user2: 'pass456' };
const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('login-section');
const app = document.getElementById('app');
const errorMsg = document.getElementById('error-msg');
const menuContainer = document.getElementById('menu');
const filterSelect = document.getElementById('filter');
const form = document.getElementById('addItemForm');

const fallbackImage = 'https://via.placeholder.com/350x200.png?text=No+Image';

const menuItems = [
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
    description: 'Tender spiced meat wrapped in pita with garlic sauce.',
    price: '$8.75',
    category: 'shawarma',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
  },
  {
    name: 'Dumplings',
    description: 'Soft dough pockets filled with minced meat and vegetables.',
    price: '$6.00',
    category: 'dumpling',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092'
  }
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value.trim();
  const password = loginForm.password.value;
  if (users[username] === password) {
    loginSection.style.display = 'none';
    app.classList.remove('hidden');
    renderMenu();
  } else {
    errorMsg.textContent = 'Invalid username or password!';
    errorMsg.style.color = 'red';
  }
});

function renderMenu(filter = 'all') {
  menuContainer.innerHTML = '';
  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);
  filteredItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.innerHTML = `
      <img src="${item.image}" onerror="this.src='${fallbackImage}'">
      <div class="menu-details">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
      </div>`;
    menuContainer.appendChild(li);
  });
}

filterSelect.addEventListener('change', () => {
  renderMenu(filterSelect.value);
});

form.addEventListener('submit', (e) => {
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
