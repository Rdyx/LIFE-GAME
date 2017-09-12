var tableau = []
var min = 0;
var max = 100;
var FN = 1;
var FR = 2;
var html;
var i = 0;
//var randomz = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0))) + Math.ceil(0);

//Lancement du jeu
$('#start').click(function () {
    //Si un des champs de nb fourmis est vide, le jeu ne se lance pas
    if (!$('#blackAnts').val() || !$('#redAnts').val()) {
        $('#content').html("Erreur 404, Léo Not Found !")
    } 
    //Le jeu se lance
    else {
        //On reset la var html pour la vider à chaque clic sur le bouton start
        html = '';

        //On fait une boucle imbriquée dans une autre pour créer le tableau avec 10 lignes
        for (var i = 0; i < 10; i++) {
            //On push 1 fois par tour <tr> dans la var html (donc 10 tours)
            html += '<tr>'
            //2eme boucle pour faire les colonnes
            for (var j = 0; j < 10; j++) {
                //On push dans html un <td> avec un id unique à chaque case qui se sert de i et de j pour être défini
                //Et ce à chaque tour de boucle
                html += '<td id="num' + i + '' + j + '"></td>';
            }
            //On ferme la balise <tr> à chaque fin de tour de boucle
            html += '</tr>'
        }

        //On push la var html dans la table content qui a été remplie grâce à la boucle
        $('#content').html(html);

        //Fonction pour créer les fourmis dans le tableau en prenant un nombre et la couleur en paramètre
        function creation(nombre, couleur) {
            //On initialise j à 0
            var j = 0;
            //On lance la boucle, tant que j est < à nombre, la boucle s'excécute
            while (j < nombre) {
                //On insert une valeur random dans randomz à chaque début de boucle
                randomz = (Math.floor(Math.random() * (max - min)) + min);
                //Si randomz < à 10, il nous faut spécifier un id qui commence par #num0 (01, 02...)
                if (randomz < 10) {
                    //Si num0x est égal à 0, on push le param couleur dedans et on 
                    //incrément j pour diminuer le nombre de tours de boucle restants
                    if ($('#num0' + randomz).html() == false) {
                        $('#num0' + randomz).html(couleur);
                        j++;
                    };
                    //Si randomz > 10, on push la couleur dans une case #num
                    //Le reste du code est le même que pour randomz < 10
                } else {
                    if ($('#num' + randomz).html() == false) {
                        $('#num' + randomz).html(couleur);
                        j++;
                    };
                }
            }
        }

        //On se sert de la valeur des inputs pour savoir combien de fourmis on veut avoir
        //On fait 2 fois la variable, une pour chaque valeur d'input et pour chaque couleur
        creation($('#blackAnts').val(), 'rouge');
        creation($('#redAnts').val(), 'noir');
    }
});
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


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }