function showCategories() {
    const parent = document.getElementById('categories');

    data.forEach(category => {
        const myCategoryElement = document.createElement('div');
        myCategoryElement.textContent = category.name;
        myCategoryElement.setAttribute('data-category', category.key);

        parent.appendChild(myCategoryElement);
    });
}

function showProductsByCategory(categoryId) {
    const selectedCategory = data.find(category => category.key === categoryId);

    const parent = document.getElementById('products');
    parent.innerHTML = '';

    selectedCategory.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.setAttribute('data-product', product.id);
        productElement.setAttribute('data-category', categoryId);

        parent.appendChild(productElement);
    });
}

function showProductInfo(categoryId, productId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const selectedProduct = selectedCategory.products.find(product => product.id == productId);

    const parent = document.getElementById('product');
    parent.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <p>Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;

    const buyButton = document.createElement('input');
    buyButton.setAttribute('type', 'button');
    buyButton.setAttribute('value', 'Buy');


    parent.appendChild(buyButton);
    addBuyButtonEventListener();
}

function addBuyButtonEventListener() {
    const buyButton = document.querySelector('#product input[type="button"]');
    buyButton.addEventListener('click', () => {
        clearScreen();
        showProductPurchasedAlert();
    });
}

function showProductPurchasedAlert() {
    alert('Вітаю, товар куплено!');
}


function clearScreen() {
    const categoriesParent = document.getElementById('categories');
    categoriesParent.innerHTML = '';

    const productsParent = document.getElementById('products');
    productsParent.innerHTML = '';

    const productParent = document.getElementById('product');
    productParent.innerHTML = '';

    showCategories();
}