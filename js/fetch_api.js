//json dosyadan veri çekmek
fetch("settings.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });
//API üzerinden veri çekmek
let userListDOM = document.querySelector("#userList");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.forEach(function (item) {
      let liDOM = document.createElement("li");
      liDOM.innerHTML = item.title;
      userListDOM.appendChild(liDOM);
    });
  });
