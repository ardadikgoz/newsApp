let fullName = prompt("Adını gir lan");
console.log(fullName);

let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color:blue">${fullName}</small>`;
