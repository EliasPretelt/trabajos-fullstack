let listados = [];
let skape = false;
let skape2 = false;
let cont = 0;





    while (skape == false) {
      let temp = prompt("Ingrese un Articulo");
      if (temp == "") {
        skape = true;
      } else {
        if (listados.length < 1) {
          listados[0] = [temp];
        } else {
          for (let i = 0; i < listados.length; i++) {
            if (listados[i] == temp) {
              alert("No Puedes Repetir Articulo");
              skape2 = true;
            }
          }
          if (skape2 == false) {
            listados.push(temp);
          } else {
            salida2 = false;
          }
        }
      }
    }
 
let orden = listados.sort();
document.write(orden);
alert(orden);
