// Import stylesheets
import "./style.css";
import "./css/bootstrap.css";
import "./js/bootstrap.js";

// Write Javascript code!
(function(w) {
  var resultado = function() {
    let moeda25 = document.getElementById("moeda25");
    let moeda10 = document.getElementById("moeda10");
    let moeda5 = document.getElementById("moeda5");
    let moeda1 = document.getElementById("moeda1");
    let valor = document.getElementById("valor");
    let moedas = [];
    let resultadoTotal = [];
    moedas.push(moeda25.value);
    moedas.push(moeda10.value);
    moedas.push(moeda5.value);
    moedas.push(moeda1.value);

    let test25 = moeda25.value * 25;
    let troco25 = test25 / 100;

    let test10 = moeda10.value * 10;
    let troco10 = test10 / 100;

    let test5 = moeda5.value * 5;
    let troco5 = test5 / 100;

    let test1 = moeda1.value * 1;
    let troco1 = test1 / 100;

    let somaMoedas = troco25 + troco10 + troco5 + troco1;

    resultadoTotal.push(moedas);
    resultadoTotal.push(valor.value);

    let appDiv = document.getElementById("resultadoValor");
    if (somaMoedas > valor.value) {
      appDiv.innerHTML =
        "[" + moedas + "]" + "," + valor.value + `=  Você pode comprar o item`;
    } else {
      appDiv.innerHTML =
        "[" +
        moedas +
        "]" +
        "," +
        valor.value +
        `=  Você não pode comprar o item`;
    }

    moeda25.value = null;
    moeda10.value = null;
    moeda5.value = null;
    moeda1.value = null;
    valor.value = null;
  };

  w.resultado = resultado;
})(window);
