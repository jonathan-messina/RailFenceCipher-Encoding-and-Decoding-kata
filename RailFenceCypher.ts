function encode(string: string, rails: number) {
  if (rails <= 1) {
    console.log("El numero de rails debe ser mayor o igual a dos.");
  } else {
    //Separamos el string en un array de caracteres
    const caracteres = string.split("");
    //establecemos la duracion del salto
    const ciclo = 2 * (rails - 1);
    //construimos la matriz
    const columnas = caracteres.reduce((accum, caracter, indice) => {
      for (let i = 0; i < rails; i++) {
        if ((indice - i) % ciclo === 0 || (indice + i) % ciclo === 0) {
          accum[i] = (accum[i] || []).concat(caracter);
        }
      }
      return accum; //Separamos el string en un array de caracteres
    }, []);
    //al ya tener los caracteres de cada fila, se procede a concatenarlos
    return columnas
      .reduce((accum, mensaje) => accum.concat(mensaje), [])
      .join("");
  }
}

function decode(string: string, rails: number) {
  if (rails < 1) {
    console.log("El numero de rails debe ser mayor o igual a dos.");
  } else {
    const mensajeOriginal = [];
    //Separamos el string en un array de caracteres
    const caracteres = string.split("");
    //establecemos la duracion del salto
    const ciclo = 2 * (rails - 1);
    //establecemos el corte
    const corte = Math.floor(caracteres.length / ciclo) + 1;
    let posicion = 0;
    //iteramos segun el corte
    for (let i = 0; i < rails; i++) {
      for (let l = 0; l <= corte; l++) {
        const coor1 = i + l * ciclo;
        const coor2 = (l + 1) * ciclo - i;
        if (!mensajeOriginal[coor1] && coor1 < caracteres.length)
          mensajeOriginal[coor1] = caracteres[posicion++];
        if (!mensajeOriginal[coor2] && coor2 < caracteres.length)
          mensajeOriginal[coor2] = caracteres[posicion++];
      }
    }
    return mensajeOriginal.join("");
  }
}
