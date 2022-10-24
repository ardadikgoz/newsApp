/* let arrayObj = [1, 2, 3];
let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj);
console.log("object1", typeof object1);

// obje oluşturma
let item1 = new Object();
let item2 = {};

console.log("item1", typeof item1);
console.log("item2", typeof item2);

console.log("object1", object1);
 */

/* let laptop1 = {
  brand: "apple",
  model: "macbook pro",
  "2kg": true, //başa illa sayı verceksen tırnaklar içinde yazabilirsin key'i
};

console.log(laptop1);
console.log(laptop1["2kg"]);
console.log(laptop1.brand);
console.log(laptop1.model);

laptop1.brand = "HP"; // değer değiştirme
console.log(laptop1.brand);

laptop1.version = "10.15"; // yeni key eklemek
console.log(laptop1);

keys = Object.keys(laptop1); // key bilgilerine ulaşmak
console.log(keys);
/* console.log(Object.keys(laptop1)); */

/* keys.forEach((item) => {
  console.log(item);
  console.log(laptop1[item]);
});

console.log("value: ", Object.values(laptop1));

let values = Object.values(laptop1); // valuesa ulaşmak

values.forEach((item) => {
  console.log(item);
});
 */

/* let user1 = {
  firstName: "Arda",
  lastName: "Dikgöz",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}`; // obje içinde fonksiyon
  },
};

console.log(user1.shortName());
 */

let settings = {
  userName: "lorem ipsum",
  password: "kötü",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "ardababa.gov",
};
/* let userName = settings.userName;
console.log(userName); */
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;

console.log(user, password, isActive, serverIP, serverName);
console.log(settings);
console.log(user);

let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;

console.log(newSettings);

let settings2 = { ...settings };
settings2.userName = "sa abi değiştim";

console.log(settings.userName);
console.log(settings2.userName);

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;
console.log(score1, score2, otherScore);

let score3 = [score];
