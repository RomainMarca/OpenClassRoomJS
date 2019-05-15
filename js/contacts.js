/* 
Activité : gestion des contacts
*/

class Contacts {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    listing() {
        return console.log("Voici la liste des contacts : \nNom: "+ this.nom+"\nPrenom: "+this.prenom);
    }
}

const carole = new Contacts("Lévisse", "Carole");
const melodie = new Contacts("Nelsonne", "Mélodie");
let contact = [];
contact.push(carole, melodie);

function action() {
    console.log("1 : Lister les contacts\n2 : ajouter un contact\n0 : Quitter");
    let choix = Number(prompt("Choisissez une action : "));
    switch (choix) {
            case 1 : 
                for(let i=0; i < contact.length; i++) {
                console.log("Nom: "+contact[i].nom +", Prenom: "+ contact[i].prenom);}
                action();
                break;
            case 2 :
                newNom = prompt("Entrer le nom du nouveau contact : ");
                newPrenom = prompt("Entrer le prénom du nouveau contact : ");
                newContact = new Contacts(newNom, newPrenom);
                contact.push(newContact);
                console.log("Le nouveau contact a bien été ajouté");
                action();
                break;
            case 3 : 
                console.log("Au revoir !");
                break;
            default : 
            action();
    }
}
console.log("Bienvenue dans la liste des contacts ! ");
action();




