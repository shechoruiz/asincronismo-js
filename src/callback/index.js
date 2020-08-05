function suma(a, b) {
  return a + b;
}

function calcular(a, b, callback) {
  return callback(a, b);
}

console.log(calcular(2, 2, suma)); //Ejemplo basico de un callback

//Ejercicio 2
function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
