/* let users = ["lorem", "ipsum", "dolor"];
let list = document.querySelector("#userList");
for (let index = 0; index < users.length; index++) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = users[index];
  list.appendChild(liDOM);
}

let lorem_list = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
]; */
/* 
let i = 0;

for (let i = 0; i < lorem_list.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
} */

/* const UL_DOM = document.querySelector("#userList");

for (let i = 0; i < lorem_list.length; i++) {
  if (lorem_list[i] == "dolor") {
    continue;
  }
  let LI_DOM = document.createElement("li");
  LI_DOM.innerHTML = lorem_list[i];
  UL_DOM.appendChild(LI_DOM);
}
 */
/* while (i < 10) {
  console.log(i);
  i++;
}
 */
/* let userName = "";

while (!userName) {
  userName = prompt("kullanıcı adı ver lan");
  console.log(userName);
}
 */

/* const PRODUCTS = [
  "laptop",
  "phone",
  "speaker",
  "desktop",
  "server",
  "mouse",
  "keyboard",
];

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);
const UL_DOM = document.querySelector("#userList");
PRODUCTS.forEach((product) => {
  let LI_DOM = document.createElement("li");
  LI_DOM.innerHTML = product;
  UL_DOM.append(LI_DOM);
});

console.log(PRODUCTS); */

/* const PRODUCTS = [
  "laptop",
  "phone",
  "speaker",
  "desktop",
  "server",
  "mouse",
  "keyboard",
];

const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length > 5);
console.log(NEW_PRODUCTS);

const USERS = [
  { fullName: "Ayse Sumer", isActive: false },
  { fullName: "Ahmet Urgan", isActive: true },
  { fullName: "Asya Basar", isActive: true },
  { fullName: "Aksel Durmaz", isActive: false },
];

const ACTIVE_USERS = USERS.filter((user) => user.isActive);
console.log(ACTIVE_USERS);
 */

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

const USER_OBJ = USERS.map((item) => {
  return {
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
  };
});

console.log(USER_OBJ);
