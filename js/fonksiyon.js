/* function greetings(firstName = "") {
  //console.log(`Merhaba ${firstName ? firstName : ""}`);
  console.log(`Merhaba ${firstName}`);
}

greetings("Hünkar Arda HAn HAzretleri");

//-----------------------fat arrow

greetings("sa");
const helloFunc = (lastName) => {
  console.log(`${lastName}`);
};

const helloFuncv2 = (lastName) => console.log(`${lastName}`);

helloFunc("helloFunc");
helloFuncv2("helloFuncv2");

const helloFuncv3 = (firstName, lastName) =>
  console.log(`merhaba ${firstName} ${lastName}`);

helloFuncv3("helloFuncv3", "Last Name info");

const helloFuncv4 = (firstname, lastName) => {
  let info = `merhaba ${firstname} ${lastName}`;
  console.log(info);
  return info;
};
helloFuncv4("hellofunc4", "last name info"); */

//--------------------- DOM ile işlem
/* let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick);

function domClick() {
  console.log("tiklandi");
  this.style.color == "blue"
    ? (this.style.color = "black")
    : (this.style.color = "blue");
} */
