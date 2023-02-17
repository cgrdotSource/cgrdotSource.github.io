// console.log('Test');

// var name = prompt('Wie heißt du?');
// alert(name);

// confirm('Nutzerbedingungen akzeptieren?');

// var x = 1;
// var y = 2;
// var z = x + y;

// console.log(z);
// console.log('Ergebnis von x + y = ' + z);

// var x = 'test1';
// var y = 'test2';

// function addieren(a, b) {
// 	var z = a + b;
// 	console.log(z);
// }

// // addieren(x, y);

// function halloWelt() {
// 	console.log('Hallo Welt');
// }

// halloWelt();

// var alter = prompt('Gib dein alter ein');

// if (alter >= 18) {
// 	console.log('Du darfst Auto fahren');
// } else if (alter > 16) {
// 	console.log('Du darfst Bier kaufen');
// } else {
// 	console.log('Du darfst kein Auto fahren');
// }

// <, >, <=, >=, ==, !

// var alter2 = '18';
// parseFloat(alter2);

// var i = 0;

// // Bedingung
// while (i < 20) {
// 	console.log(i);
// 	i = i + 1;
// }

// Anweisung, Bedingung, Anweisung
// for (let i = 0; i < 20; i++) {
// 	console.log(i);
// }

// let meinArray = [];
// meinArray = [5, 10, 20];
// meinArray.push(30);

// console.log(meinArray); // 5, 10, 20, 30
// console.log(meinArray[0]);
// console.log(meinArray.length - 1);

// console.log('string\nstring2');

// function quadratZahlen(z) {
// 	const arr = [];
// 	for (let i = 0; i <= z; i++) {
// 		arr.push(i * i);
// 	}
// 	console.log('Erstes Element:', arr[0]);
// 	console.log('Letztes Element:', arr[arr.length - 1]);
// 	console.log('Alle Element:', arr);
// }

// quadratZahlen(5);
// quadratZahlen(10);

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var ergebnis = document.getElementById('ergebnis');

input2.addEventListener('keyup', function (event) {
	if (event.code === 'Enter') {
		var lsg = parseFloat(input1.value) + parseFloat(input2.value);
		if (isNaN(lsg)) {
			ergebnis.value = 'Keine Zahl';
		} else {
			ergebnis.value = lsg;
		}
	}
});

var button = document.getElementById('TestButton');

button.addEventListener('', function () {
	console.log('Click');
});

var zahlen = [2, 3, 4];

for (let i in zahlen) {
	console.log(i);
}

for (let x of zahlen) {
	console.log(x);
}
