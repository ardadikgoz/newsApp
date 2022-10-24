let title = document.getElementById("title");
console.log(title.innerHTML);

let link = document.querySelector("#kodluyoruzLink");
link.innerHTML += " değişti";
link.style.color = "red";
link.classList.add("btn");
