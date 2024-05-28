function Storage(initialItems) {
    this.items = initialItems; // Властивість items для зберігання масиву товарів

    // Метод для отримання масиву товарів
    this.getItems = function() {
        return this.items;
    };

    // Метод для додавання нового товару
    this.addItem = function(item) {
        this.items.push(item);
    };

    // Метод для видалення товару
    this.removeItem = function(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    };
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(storage.getItems()); // ["apple", "banana", "mango"]

storage.addItem("orange");
console.log(storage.getItems()); // ["apple", "banana", "mango", "orange"]

storage.removeItem("banana");
console.log(storage.getItems()); // ["apple", "mango", "orange"]
