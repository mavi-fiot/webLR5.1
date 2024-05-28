const productsDatabase = {
    1: { id: 1, name: 'Сукня', price: 1000 },
    2: { id: 2, name: 'Сорочка', price: 500 },
    3: { id: 3, name: 'Футболка', price: 300 }
};

// Функція getProductDetails
function getProductDetails(productId, successCallback, errorCallback) {
    // Знайти товар за productId у "базі даних"
    const product = productsDatabase[productId];
    
    // Якщо товар знайдений, викликаємо successCallback
    if (product) {
        successCallback(product);
    } else {
        // Якщо товар не знайдений, викликаємо errorCallback
        errorCallback(`Товар за кодом ${productId} відсутній.`);
    }
}

document.getElementById('getProductBtn').addEventListener('click', () => {
    const productId = document.getElementById('productId').value;
    const resultDiv = document.getElementById('result');
    
    getProductDetails(
        parseInt(productId), 
        (product) => {
            resultDiv.style.display = 'block';
            resultDiv.className = 'success';
            resultDiv.textContent = `Товар в наявності: ${product.name}, Ціна: ${product.price} грн.`;
        }, 
        (error) => {
            resultDiv.style.display = 'block';
            resultDiv.className = 'error';
            resultDiv.textContent = error;
        }
    );
});
