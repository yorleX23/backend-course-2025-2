

const { URL } = require('url');

// Константа (тут має бути дата у форматі, який приймає НБУ)
const date = "20220201";  (формат YYYYMMDD)

// Базовий URL без параметрів
const myUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/res");

// Додаємо параметри
myUrl.searchParams.append("date", date);
myUrl.searchParams.append("json", "");


console.log(myUrl.toString());
