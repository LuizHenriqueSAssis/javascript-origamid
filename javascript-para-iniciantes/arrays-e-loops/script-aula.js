//var ultimoItem = videoGames.pop();

//videoGames.push();

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 1) {
  console.log(i);
  i++;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (item, index) {
  frutas.pop();
  console.log(item);
});

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
