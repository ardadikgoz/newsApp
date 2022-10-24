let item = document.querySelector("#list>li:last-child");
//let item = document.querySelector("#list>li:first-child");
console.log(item);
console.log(
  (document.querySelector("#list>li:last-child").innerText = "değiştirdim")
);

let ulDOM = document.querySelector("#list");
let liDOM = document.createElement("li");

liDOM.innerHTML = "kendim oluşturduğum öğe";
//ulDOM.append(liDOM); //sona eklemek
ulDOM.prepend(liDOM); //başa eklemek
