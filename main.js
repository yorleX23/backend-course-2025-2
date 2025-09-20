// main.js
// Варіант 5: міжнародні резерви, дата лютий 2022

const { URL } = require('url');

// Константа (тут має бути дата у форматі, який приймає НБУ)
const date = "20220201"; // 1 лютого 2022 (формат YYYYMMDD)

// Базовий URL без параметрів
const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/reserves");

// Додаємо параметри
myUrl.searchParams.append("date", date);
myUrl.searchParams.append("json", "");

// Виводимо у консоль готовий URL
console.log(myUrl.toString());
