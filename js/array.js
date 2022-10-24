/* let domain = "arda en iyisi";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

document.querySelector("#info").innerHTML = items.length;
console.log(items.length);
console.log(items[items.length - 1]);
console.log("ortadaki: ", items[Math.floor(items.length / 2)]); //ortadaki eleman
console.log(typeof items);
console.log(Array.isArray(items)); */

/* let items = [10, 20, 30, 40];
console.log("ilk hali: ", items);

items.push(41); //sona ekle
console.log(items);
items.unshift(9); //başa ekle
console.log(items);
items.pop();
console.log("sil", items);

let lastItem = items.pop(); // son elemanı lastItem içine attık
console.log("silinen eleman", lastItem, "items: ", items);

let firstItem = items.shift(); //ilk elemanı buraya attım shift baştam siler
console.log("silinen eleman", firstItem, "items: ", items);

items[0] = 5;
console.log(items);

items[items.length - 1] = 31;
console.log(items);
 */

let items = [1, 2, 3, 4, 5];
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);
items.push(maleUsers);
console.log(items);
console.log(items.length);
console.log(items[0].length); //array içinde array length bilgisi
console.log(items[0][0]); //ayseye ulastık

let newItems = items.splice(1, 5); // 1 ve 5 numara arasındaki itemleri yeni diziye attı
console.log("newitems: ", newItems);
console.log("items: ", items);

items.unshift("lorem");
items.push("ipsum");

console.log(items[items.indexOf("ipsum")]); //indexOf() dalgayı aradı buldu

let copyItems = items;
console.log(items);
copyItems.pop(); //son öğeyi copitemstan çıkardı ama ikisinden de çıktı
console.log("items", items);
console.log("copy", copyItems);

copyItems = items.slice(); //array kopyalama böyle oluyor gadaşım unutmA
copyItems.pop();
console.log("items", items);
console.log("copy", copyItems);

let es6Items = [...items]; // bu da yeni hali slice veya bununla kopyalanıyor
console.log("es6: ", es6Items);

let allUsers = [...femaleUsers, ...maleUsers];
console.log("es6 arrayleri birleştirmek: ", allUsers);

console.log(allUsers.toString()); //string yaptı görüyon zaten
console.log(allUsers.join(" --- ")); //bu da tüm elemanları bunla birleştir

allUsers.splice(allUsers.length - 1, 0, "Melisa"); //sondan bir öncekine , parçalamadan, bu elemanı ekle
allUsers.splice(Math.floor(allUsers.length / 2), 0, "ARDA"); // burda da ortaya soktum
console.log(allUsers);
