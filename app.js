// var col = 10;
// var row = 10;
// $('#content').empty();
// var ligne;
// var array = [];
// var FN = 1;
// var FR = 2;

// for (var i = 0; i < col; i++) {
//     ligne += '<td data-y="' + i + '">' + i + '</td>';
//     array.push(Array(10).fill(0))
// }

// for (var i = 0; i < row; i++) {
//     $('#content').append('<tr data-x="' + i + '">' + ligne + '</tr>');
// }

// // setInterval(function random(min, max){
// //     min = Math.ceil(0);
// //     max = Math.floor(10);
// //     array[Math.floor(Math.random() * (max - min)) + min][Math.floor(Math.random() * (max - min)) + min] = 1;
// //     console.log(array);
// //     for(var i = 0; i < array.length; i++){
// //         for (var j = 0; j < array[i].length; j++) {
// //             console.log(array[i][j])
// //             if(array[i][j] == FN){
// //                 return array;
// //             }

// //         }
// //     }
// // }, 1000);

// console.log(array.length)

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }


var tableau = []
var row = 10;
var col = 10;
var html;
var randomz = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0))) + Math.ceil(0);

for (var i = 0; i < row; i++) {
    html += '<tr>'
    for (var j = 0; j < col; j++) {
        html += '<td id="num' + i + '' + j + '">0</td>';
        tableau.push(i + "" + j)
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

// function creation(nombre){
//     for(var i = 0; i < nombre; i++){
//         console.log(i)
//     }
// }

// creation(2)

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }