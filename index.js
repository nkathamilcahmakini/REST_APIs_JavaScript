function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((information) => {
      const returnProduct = information.products.slice(0, 8);
      generateProductCards(returnProduct);
    });
}

function generateProductCards(information) {
  const productsContainer = document.getElementById("offers");
  for (const product of information) {
    const classifiedProducts = document.createElement("div");
    classifiedProducts.classList.add("prod-card");
    classifiedProducts.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.name}" />
      <h2>${product.title}</h2>
      <div class='productPrice'>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
    productsContainer.appendChild(classifiedProducts);
  }
}

fetchProducts();

