var pessoa = {
  nome: "Luiz",
  idade: 22,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var menu = {
  with: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function () {
  console.log("escondi");
};

var bg = menu.backgroundColor;
