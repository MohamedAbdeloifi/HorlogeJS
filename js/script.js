// Séléctionner les aiguilles de montre
const aiguilleHeures = document.querySelector("#hour");
const aiguilleMinutes = document.querySelector("#minute");
const aiguilleSecondes = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()



//Stocker l'heure , minute , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Indice : Toutes les aiguilles doivent se déplacer, chaque seconde selon un degré



// Déplacer les aiguilles 
function demarrerLaMontre() {

    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();

    aiguilleHeures.style.transform = `rotate(${ heure * (360/12) + minutes * (30/60) }deg)`;
    aiguilleHeures.style.transition = 'ease-out';
    aiguilleMinutes.style.transform = `rotate(${ minutes * (360/60) + secondes * (6/60) }deg)`;
    aiguilleMinutes.style.transition = 'ease-out';
    aiguilleSecondes.style.transform = `rotate(${ secondes * (360/60) }deg)`;
    aiguilleSecondes.style.transition = 'ease-out';

}
// Executer la fonction chaque second
// var interval = setInterval(demarrerLaMontre, 1000);

window.setInterval(demarrerLaMontre, 1000);
