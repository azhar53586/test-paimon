// Cart functionality
let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(${productName} added to cart.);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    addToCart(button.getAttribute('data-product'));
  });
});

// Admin login
function checkPassword() {
  const password = document.getElementById('password').value;
  if (password === 'admin123') {
    document.getElementById('admin-content').style.display = 'block';
  } else {
    alert('Incorrect password!');
  }
}
