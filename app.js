var tableau = []
var html;
var i = 0;
var j = 0;
var moveNumber = 0;
//var randomz = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0))) + Math.ceil(0);

//Lancement du jeu
$('#start').click(function () {
    //Si un des champs de nb fourmis est vide, inférieur à 0 ou que la valeur des 2 champs est > 100
    //Le jeu ne se lance pas
    if (!$('#blackAnts').val() || !$('#redAnts').val() || ($('#blackAnts').val() || $('#redAnts').val()) < 0 || (Number($('#blackAnts').val()) + Number($('#redAnts').val())) > 100) {
        $('#content').html("Erreur 404, Léo Not Found !");
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
                randomz = randomize(0, 101);
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

        creation($('#blackAnts').val(), 'rouge');
        creation($('#redAnts').val(), 'noir');
        //On se sert de la valeur des inputs pour savoir combien de fourmis on veut avoir
        //On fait 2 fois la variable, une pour chaque valeur d'input et pour chaque couleur
        // creation($('#blackAnts').val(), 'rouge');
        // creation($('#redAnts').val(), 'noir');
    }

//Déplacements
    setInterval(function move() {
        //Reset du tableau à chaque lancement de la fonction
        tableau = [];
        //Appel de la fonction select
        select();
        //Boucle qui va parcourir le tableau
        for (var w = 0; w < tableau.length; w++) {
            //Si l'index du tableau < 10
            if (tableau[w] < 10) {
                //Si l'index du tableau = 0
                if (tableau[w] == 0) {
                    //On défini une variable qui appelle la fonction associée et qui définir la nouvelle position
                    caseNum = noTopLeft(tableau[w]);
                    //On appelle la fonction avec ses 2 arguments pour replacer la fourmis
                    topCheck(caseNum, tableau[w]);
                }
                //De même si l'index = 9
                if (tableau[w] == 9) {
                    caseNum = noTopRight(tableau[w]);
                    topCheck(caseNum, tableau[w]);
                }
                //Si l'index est compris entre 1 et 8
                else {
                    caseNum = noTop(tableau[w]);
                    topCheck(caseNum, tableau[w]);
                }
            }
            //Conditions de ligne du bas
            if (tableau[w] >= 90) {
                if (tableau[w] == 90) {
                    caseNum = noBottomLeft(tableau[w]);
                    bottomCheck(caseNum, tableau[w]);
                }
                if (tableau[w] == 99) {
                    caseNum = noBottomRight(tableau[w]);
                    bottomCheck(caseNum, tableau[w]);
                }
                else {
                    caseNum = noBottom(tableau[w]);
                    bottomCheck(caseNum, tableau[w]);
                }
            }
            //Condition de déplacements body
            if (tableau[w] >= 10 || tableau[w] < 90) {
                if (tableau[w] == 10 || tableau[w] == 20 || tableau[w] == 30 || tableau[w] == 40 || tableau[w] == 50 || tableau[w] == 60 || tableau[w] == 70 || tableau[w] == 80) {
                    caseNum = noLeft(tableau[w]);
                    moveBody(caseNum, tableau[w]);
                }
                if (tableau[w] == 19 || tableau[w] == 29 || tableau[w] == 39 || tableau[w] == 49 || tableau[w] == 59 || tableau[w] == 69 || tableau[w] == 79 || tableau[w] == 89) {
                    caseNum = noRight(tableau[w]);
                    moveBody(caseNum, tableau[w]);
                }
                else {
                    caseNum = moveAny(tableau[w]);
                    moveBody(caseNum, tableau[w]);
                }
            };
        }

        console.log(tableau)
    }, 500);
});

function topCheck(arg1, arg2) {
    if (arg1 < 10) {
        $('#num0' + arg1).html($('#num0' + arg2).html());
        $('#num0' + arg2).html('');
    } else {
        $('#num' + arg1).html($('#num0' + arg2).html());
        $('#num0' + arg2).html('');
    }
}

function moveBody(arg1, arg2) {
    if (arg1 < 10) {
        $('#num0' + arg1).html($('#num' + arg2).html());
        $('#num' + arg2).html('');
    } else {
        $('#num' + arg1).html($('#num' + arg2).html());
        $('#num' + arg2).html('');
    }
}

function bottomCheck(arg1, arg2) {
    $('#num' + arg1).html($('#num' + arg2).html());
    $('#num' + arg2).html('');
}

//Fonction qui parcourt tout le tableau pour récup les cases avec quelque chose dedans
function select() {
    for (var v = 0; v < 100; v++) {
        if (v < 10) {
            if ($('#num0' + v).html() == "rouge" || $('#num0' + v).html() == "noir") {
                tableau.push(v);
            };
        }
        if ($('#num' + v).html() == "rouge" || $('#num' + v).html() == "noir") {
            tableau.push(v);
        };
    }
}

// 00 01 02
// 10 XX 12
// 20 21 22

// 1 = i - 11  8 = i - 10  7 = i - 9
// 2 = i - 1   XXXXXXXXXX  6 = i + 1
// 3 = i + 9   4 = i + 10  5 = i + 11

//Fonction random (min inclus, max exclu)
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Fonction déplacement possible dans toutes les directions
function moveAny(id) {
    //reset du compteur moveNumber
    moveNumber = id;
    //random move entre 0 et 7 via switch qui va retourner la valeur de moveNumber
    randomMove = randomize(0, 8);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber - 11
            break;
        case 1:
            return moveNumber = moveNumber - 1
            break;
        case 2:
            return moveNumber = moveNumber + 9
            break;
        case 3:
            return moveNumber = moveNumber + 10
            break;
        case 4:
            return moveNumber = moveNumber + 11
            break;
        case 5:
            return moveNumber = moveNumber + 1
            break;
        case 6:
            return moveNumber = moveNumber - 9
            break;
        case 7:
            return moveNumber = moveNumber - 10
            break;
    }
};

//Fonction déplacement impossible en haut
function noTop(id) {
    moveNumber = id;
    randomMove = randomize(0, 5);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber - 1
            break;
        case 1:
            return moveNumber = moveNumber + 9
            break;
        case 2:
            return moveNumber = moveNumber + 10
            break;
        case 3:
            return moveNumber = moveNumber + 11
            break;
        case 4:
            return moveNumber = moveNumber + 1
            break;
    }
};

//Fonction déplacement impossible à droite
function noRight(id) {
    moveNumber = 0;
    randomMove = randomize(0, 5);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber - 11
            break;
        case 1:
            return moveNumber = moveNumber - 1
            break;
        case 2:
            return moveNumber = moveNumber + 9
            break;
        case 3:
            return moveNumber = moveNumber + 10
            break;
        case 4:
            return moveNumber = moveNumber - 10
            break;
    }
};

//Fonction déplacement impossible en bas
function noBottom(id) {
    moveNumber = id;
    randomMove = randomize(0, 5);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber - 11
            break;
        case 1:
            return moveNumber = moveNumber - 1
            break;
        case 2:
            return moveNumber = moveNumber + 1
            break;
        case 3:
            return moveNumber = moveNumber - 9
            break;
        case 4:
            return moveNumber = moveNumber - 10
            break;
    }
};

//Fonction déplacement impossible à gauche
function noLeft(id) {
    moveNumber = id;
    randomMove = randomize(0, 5);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber + 10
            break;
        case 1:
            return moveNumber = moveNumber + 11
            break;
        case 2:
            return moveNumber = moveNumber + 1
            break;
        case 3:
            return moveNumber = moveNumber - 9
            break;
        case 4:
            return moveNumber = moveNumber - 10
            break;
    }
};

//Fonction déplacement impossible en corner-top-gauche
function noTopLeft(id) {
    moveNumber = id;
    randomMove = randomize(0, 3);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber + 10
            break;
        case 1:
            return moveNumber = moveNumber + 11
            break;
        case 2:
            return moveNumber = moveNumber + 1
            break;
    }
};

//Fonction déplacement impossible en corner-top-droit
function noTopRight(id) {
    moveNumber = id;
    randomMove = randomize(0, 3);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber - 1
            break;
        case 1:
            return moveNumber = moveNumber + 9
            break;
        case 2:
            return moveNumber = moveNumber + 10
            break;
    }
};

//Fonction déplacement impossible en corner-bottom-droit
function noBottomRight(id) {
    moveNumber = id;
    randomMove = randomize(0, 3);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber - 11
            break;
        case 1:
            return moveNumber = moveNumber - 1
            break;
        case 2:
            return moveNumber = moveNumber - 10
            break;
    }
};

//Fonction déplacement impossible en corner-bottom-gauche
function noBottomLeft(id) {
    moveNumber = id;
    randomMove = randomize(0, 3);
    switch (randomMove) {
        case 0:
            return moveNumber = moveNumber + 1
            break;
        case 1:
            return moveNumber = moveNumber - 9
            break;
        case 2:
            return moveNumber = moveNumber - 10
            break;
    }
};