const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Отримати поточну дату
const currentDate = new Date();

// Фільтрувати імена міст, де концерти ще не пройшли, і відсортувати їх за датою
const upcomingCities = Object.entries(concerts)
    .filter(([city, date]) => date > currentDate) // Фільтрація міст
    .sort(([, dateA], [, dateB]) => dateA - dateB) // Сортування за датою
    .map(([city]) => city); // Отримання тільки імен міст

// Вивести результат у консоль
console.log(upcomingCities); // Очікуваний результат: ["Одеса", "Умань", "Харків"]
