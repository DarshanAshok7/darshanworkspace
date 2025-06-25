const products = [
  {
    name: "Wireless Headphones",
    price: "$49.99",
    image: "https://via.placeholder.com/250x200?text=Headphones"
  },
  {
    name: "Smart Watch",
    price: "$89.99",
    image: "https://via.placeholder.com/250x200?text=Smart+Watch"
  },
  {
    name: "Gaming Mouse",
    price: "$29.99",
    image: "https://via.placeholder.com/250x200?text=Gaming+Mouse"
  },
  {
    name: "Bluetooth Speaker",
    price: "$59.99",
    image: "https://via.placeholder.com/250x200?text=Speaker"
  }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="alert('Added to cart: ${product.name}')">Add to Cart</button>
  `;

  productList.appendChild(card);
});
