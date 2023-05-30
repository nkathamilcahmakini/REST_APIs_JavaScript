function generateProductCards(data) {
    const productContainer = document.getElementById("offers");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>ADD TO CART</button>
              </div>
          `;
      productContainer.appendChild(card);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const returnedData = data.products.slice(0, 10);
        generateProductCards(returnedData);
    });
}
fetchProducts()

// #users{
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
// }
// .people{
//   border: solid aqua;
//   border-radius: 5px;
//   margin-bottom: 2%;
//   text-align: center;
// }