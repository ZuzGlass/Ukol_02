const celeJmeno = prompt("Zadejte vaše křestní jméno bez diakritiky:").trim();
const celePrijmeni = prompt("Zadejte vaše příjmení bez diakritiky:").trim();

const castJmena = celeJmeno.slice(0, 3).toLowerCase();
const castPrijmeni = celePrijmeni.slice(0, 5).toLowerCase();

const email = {
    jmeno: castJmena,
    prijmeni: castPrijmeni,
    domena: "fit.cvut.cz",
}

document.body.innerHTML =  `Váš nový e-mail je: <h3>${email.prijmeni}${email.jmeno}@${email.domena}</h3>`;