console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const ul = document.querySelector('.resultUl');
  for (const product of products) {
    const html = `<h2>${product.name}</h2><span>price:${product.price}</span><br><span>Rating:${product.rating}</span>`
    const li = document.createElement('li');
    li.innerHTML = html;
    ul.appendChild(li);
  } 
}

renderProducts(products); 

// Searching and filtering products
document.querySelector('.userInput').oninput = filterProducts;
document.querySelector('.maxPrice').oninput = filterProducts;
document.querySelector('.minRate').oninput = filterProducts;

function filterProducts() {
  const searchValue = document.querySelector('.userInput').value.toLowerCase().trim();
  const maxPriceValue = parseInt(document.querySelector('.maxPrice').value.trim(), 10) || Infinity;
  const minRateValue = parseInt(document.querySelector('.minRate').value.trim(), 10) || 0;
  
  const searchItems = document.querySelectorAll('.resultUl li');
  for (const item of searchItems) {
    const name = item.children[0].innerText.toLowerCase();
    const price = parseInt(item.children[1].innerText.split(':')[1], 10);
    const rating = parseInt(item.children[2].innerText.split(':')[1], 10);
    
    const shouldHide = name.indexOf(searchValue) === -1 || price > maxPriceValue || rating < minRateValue;
    item.classList.toggle('hide', shouldHide);
  }
}
