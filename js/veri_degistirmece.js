let price = 111;
let string_price = "111";
let has_password = true;

console.log("price: ", typeof price);

console.log("string_price: ", typeof string_price);

console.log("has_password: ", typeof has_password);

let number1 = "11";
console.log("number1: ", parseInt(number1));
//parse string içindeki sayıları alıp dönüştürür parseint
let number2 = "11px";
console.log("number2: ", parseInt(number2));
//parse kullanmazsan dönüştürmez
let number3 = "11px";
console.log("number3: ", Number(number3), typeof number3);

let number4 = 55;
console.log("number4: ", number4.toString());
