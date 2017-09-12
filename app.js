var tableau = []
var min = 0;
var max = 100;
var FN = 1;
var FR = 2;
var html;
var i = 0;
//var randomz = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0))) + Math.ceil(0);

for (var i = 0; i < 10; i++) {
    html += '<tr>'
    for (var j = 0; j < 10; j++) {
        html += '<td id="num' + i + '' + j + '">0</td>';
    }
    html += '</tr>'
}

$('#content').html(html);

//Déplacements
// setInterval(function random(min, max) {
//     min = 0;
//     max = 100;
//     randomz = Math.floor(Math.random() * (max - min)) + min;
//     if(randomz < 10){
//         $('#num0' + randomz).html('1');
//     } else {
//     $('#num' + randomz).html('1');
//     }
// }, 500);

//Fonction pour créer les fourmis dans le tableau en prenant un nombre et la couleur en paramètre
function creation(nombre, couleur) {
    //On initialise j à 0
    var j = 0;
    //On set le random min
    var min = 0;
    //Le random max
    var max = 100;
    //On lance la boucle, tant que j est < à nombre, la boucle s'excécute
    while (j < nombre) {
        //On insert une valeur random dans randomz à chaque début de boucle
        randomz = (Math.floor(Math.random() * (max - min)) + min);
        //Si randomz < à 10, il nous faut spécifier un id qui commence par #num0 (01, 02...)
        if (randomz < 10) {
            //Si num0x est égal à 0, on push le param couleur dedans et on 
            //incrément j pour diminuer le nombre de tours de boucle
            if ($('#num0' + randomz).html() == 0) {
                $('#num0' + randomz).html(couleur);
                j++;
            } 
            //Si la case est déjà pleine, on relance la fonction sans changer ses paramètres
            else {
                creation();
            }
        //Si randomz > 10, on push la couleur dans une case #num
        //Le reste du code est le même que pour randomz < 10
        } else {
            if ($('#num' + randomz).html() == 0) {
                $('#num' + randomz).html(couleur);
                j++;
            } else {
                creation();
            }
        }
    }
}

creation(5, 'rouge');
creation(5, 'noir');
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }