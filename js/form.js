//form submit

let formDOM = document.querySelector("#userForm");

function formSubmit(e) {
  e.preventDefault();
  console.log("islem gerceklesti");
  let scoreInputDOM = document.querySelector("#score"); //input içindeki değeri value almak
  console.log(scoreInputDOM.value);
  localStorage.setItem("score", scoreInputDOM.value);
}

formDOM.addEventListener("submit", formSubmit);
