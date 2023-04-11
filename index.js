// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
const esPar = (num) => {
  if(typeof(num) !== 'number'){
    console.log(`"${num}" tiene que ser de tipo número`);
    return;
  }
  if (num%1!=0){
    console.log("tenes que ingresar un número entero");
    return;
  }
  (num%2===0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);
};

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
const mayor = (num1, num2) => {
  if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
    console.log(`ingresa 2 parámetros de tipo número`);
    return;
  }
  const inputs = `Ingresaste ${num1} y ${num2}: `;
  (num1>num2) ? console.log(inputs + `${num1} es mayor`)
  : (num1<num2) ? console.log(inputs + `${num2} es mayor`)
  : console.log(inputs + `son iguales`);
};

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
const esMult5 = (num) => {
  if(typeof(num) !== 'number'){
    console.log(`"${num}" tiene que ser de tipo número`);
    return;
  }
  if (num%1!=0){
    console.log("tenes que ingresar un número entero");
    return;
  }
  (num%5===0) ? console.log(`${num} es múltiplo de 5`) : console.log(`${num} NO es múltiplo de 5`);
};

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
const contarHasta = (num) => {
  if(typeof(num) !== 'number'){
    console.log(`"${num}" tiene que ser de tipo número`);
    return;
  }
  if (num%1!=0){
    console.log("tenes que ingresar un número entero");
    return;
  }
  for (let i = 0; i <= num; i++) {
    console.log(i);  
  }
}

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
const repeat = (palabra, num) => {
  if(typeof(num) !== 'number'){
    console.log(`falta el segundo parámetro o no es de tipo número`);
    return;
  }
  if (num%1!=0){
    console.log("tenes que ingresar un número entero");
    return;
  }
  for (let i = 0; i < num; i++) {
    console.log(String(palabra));  
  }
}

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
const imprimeArr = (arr) => {
  !Array.isArray(arr) ? console.log("dale, pasame un array")
  : arr.forEach(el => {
    console.log(el);
  });
}

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
const es_num = (arr) => {
  let bool = true;
  arr.forEach(el => {
    if (typeof(el)!=='number'){
      bool = false;
    }
  });
  return bool;
}

const imprimeArr10_5 = (arr) => {
  if (!Array.isArray(arr)||arr.length===0) {
    console.log("dale, pasame un array con elementos")
    return;
  }
  if (arr.length!==10){
    console.log("el arreglo tiene que tener 10 elementos");
    return;
  }
  if (es_num(arr)) {
    arr.forEach(el => {
      if (arr.indexOf(el)!==4) console.log(el);
    });
  } else console.log(`Algún elemento del arreglo no es un número`);
}

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
const multArr = (arr, num) => {
  if (!Array.isArray(arr)||arr.length===0) {
    console.log("dale, pasame un array con elementos")
    return;
  }
  if(typeof(num) !== 'number'){
    console.log(`falta el segundo parámetro o no es de tipo número`);
    return;
  }
  if (es_num(arr)) {
    arr.forEach(el => {
      console.log(`${el} x ${num} = ${el*num}`);
    });
  } else console.log(`Algún elemento del arreglo no es un número`);
}
