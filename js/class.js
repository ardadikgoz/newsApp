let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class"); //çoklu class ekleme

greeting.classList.remove("title", "third-class", "second-class"); //çoklu class silme

console.log(greeting.classList);
