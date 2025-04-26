function checkPassword() {
  const password = document.getElementById('password').value;
  if (password === 'admin123') {
    window.location.href = 'admin1.html'; // Go to admin page
  } else {
    alert('Incorrect password!');
  }
}
function openPopup(productName, productImage) {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup-product-name').textContent = productName;
  document.getElementById('popup-image').src = productImage;

  const message = Hello, I am interested in buying "${productName}".;
  const phoneNumber = "YOUR_PHONE_NUMBER_HERE"; // Example: 919876543210
  const whatsappURL = https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)};
  document.getElementById('whatsapp-link').href = whatsappURL;
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
