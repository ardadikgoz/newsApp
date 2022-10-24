let price = 100;
let tax = 0.18;
let total = price + price * tax;
console.log("Değer: ", price, "Vergi oranı: ", tax, "Toplam fiyat: ", total);

total *= 10;

console.log("10la çarp ", total);
console.log("mod alma ", total % 13);
console.log("üs al ", total ** 4);
console.log("1.9 asagi yuvarla ", Math.floor(1.9));
console.log("1.1 yukarı yuvarla ", Math.ceil(1.1));
console.log("2.5 yakına yuvarla ", Math.round(2.5));

let string_number = "31";
console.log(string_number);
let new_number = Number(string_number);
console.log(new_number);
