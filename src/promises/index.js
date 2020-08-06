// Ejercicio 1
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!, esta correcto");
    } else {
      reject("Whooops!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// Ejercicio 2 con tiempo incluido
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoooops!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .then(() => console.log("Hola señor"))
  .catch((err) => console.error(err));

// Como correr varias promesas al mismo tiempo o encadenadas
Promise.all([somethingWillHappen1(), somethingWillHappen2()]) //Esta sentencia encadena las promesas, en un array
  .then((response) => {
    console.log("Array de resultados", response);
  })
  .catch((err) => {
    console.error(err);
  });
