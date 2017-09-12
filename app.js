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

for (var i = 0; i < row; i++) {
    html += '<tr>'
    for (var j = 0; j < col; j++) {
        html += '<td id="' + i + '' + j + '">0</td>';
        tableau.push(i + "" + j)
    }
    html += '</tr>'
}

$('#content').html(html);

setInterval(function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    $('#' + (Math.floor(Math.random() * (max - min)) + min)).html('1');
}, 50);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }