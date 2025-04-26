<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel - Pimon Store</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Pimon Store - Admin Panel</h1>
  </header>

  <section id="admin-section">
    <h2>Admin Login</h2>
    <label for="password">Enter password:</label>
    <input type="password" id="password" placeholder="Password">
    <button onclick="checkPassword()">Submit</button>

    <div id="admin-content" style="display: none;">
      <h3>Manage Products</h3>
      <button onclick="addProduct()">Add New Product</button>
      <button onclick="removeProduct()">Remove Product</button>
      <p>Product Management Options...</p>
    </div>
  </section>

  <footer>
    <p>Contact us via WhatsApp: <a href="https://wa.me/(numberhere)" target="_blank">Chat with us</a></p>
  </footer>

  <script src="script.js"></script>
</body>
</html>