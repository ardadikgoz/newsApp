let email = "ardadikgoz@gmail.com";
let first_name = "arda";
let lastName = "dikgöz";

//lenght
console.log(`
    Aga adın: ${first_name}.
    Aga soyadın: ${lastName}.
    Aga mail: ${email}
    Aga mail uzun: ${email.length}.
    Aga kod ad: ${first_name[0]}.
    Aga daşşa büyüt: ${first_name.toUpperCase()}.
    Aga @ arayalım: ${email.search("@")}.
    Aga @ten sonrası: ${email.slice(11)}.
    Aga bu iş görür buna bakarsın: ${email.slice(11, email.indexOf("."))}
    Aga değiş: ${first_name.replace("arda", "koca daşşak")}
    Aga arda?: ${first_name.includes("arda")}
    Aga soyad z ile mi bitti?: ${lastName.endsWith("z")}
    Aga ad a ile mi başladı?: ${first_name.startsWith("a")}
    Aga ad soyad: ${first_name[0].toUpperCase()}${first_name.slice(
  1
)} ${lastName[0].toUpperCase()}${lastName.slice(1)}
    
`);
