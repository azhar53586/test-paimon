function checkPassword() {
  const password = document.getElementById('password').value;
  if (password === 'admin123') {
    window.location.href = 'admin.html'; // Go to admin page
  } else {
    alert('Incorrect password!');
  }
}
