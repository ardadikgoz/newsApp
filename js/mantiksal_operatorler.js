// === hem değeri hem türü eşitse
let price = "1";
console.log(price === 1);

let username = prompt("kullanıcı adı gir");
//let age = prompt("kaç cm");
let info = document.querySelector("#title");

/* if (username && age > 22) {
  //if kısmı her zaman true ile çalışır
  info.innerHTML = "Hoşgeldin goca daşşaklı abi her zamanki gibi kocaman.";
} else if (!username) {
  info.innerHTML = "isim gir oç";
} else if (!(age > 22)) {
  info.innerHTML = "burayı terk et";
} */

// ternary operatörler`:
// josul ? true kısım : false kısım

info.innerHTML = `${username.length >= 0 ? username : "nası ya"}`;
