/* //--------local storage işlemleri

let user = { userName: "ardadikgoz", isActive: true };

localStorage.setItem("userInfo", JSON.stringify(user)); //string olarak vermen lazım diğer türlü object olarak görünüyor

let userInfo = localStorage.getItem("userInfo");
userInfo = JSON.parse(userInfo); // parse etmeden düzgün okutmuyor dene istersen
console.log(userInfo);
let user = { userName: "ardadikgoz", isActive: true };
 */

//------------

let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

function clickEvent() {
  this.id == "increase" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  counterDOM.innerHTML = counter;
}

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);
