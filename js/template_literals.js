let username = "Arda";
const DOMAIN = "dassagi.dev";

let email = username + "@" + DOMAIN;
console.log("sa ", username, "hg ", "mail: ", email);

let info = `Naber ${username} hoş geldin.
Kod adın: ${username[0]}.
Mailin ${email}
Adının uzunluğu: ${username.length}.
Daşşağının kilosu: ${(7 + 1) * 10}kg.
Maaşallah efendim.
Saati vereyim efendim: ${new Date()}
`;

console.log(info);
