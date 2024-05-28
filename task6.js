function applyDiscountAndAddId(medicines) {
  return medicines.map((medicine, index) => {
      // Створення нового об'єкту з існуючого, додаючи id
      const newMedicine = { ...medicine, id: index + 1 };
      
      // Якщо ціна перевищує 300 грн, застосувати знижку 30%
      if (medicine.price > 300) {
          newMedicine.price = (medicine.price * 0.7).toFixed(2); 
      }
      
      return newMedicine;
  });
}

const medicines = [
  { name: "Noshpa", price: 170 },
  { name: "Analgin", price: 55 },
  { name: "Quanil", price: 310 },
  { name: "Alphacholine", price: 390 },
];

const updatedMedicines = applyDiscountAndAddId(medicines);

// Використовуємо console.table для зручного виводу
console.table(updatedMedicines);
