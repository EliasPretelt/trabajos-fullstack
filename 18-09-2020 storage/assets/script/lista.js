const tabla = document.getElementById("tablaUsuario");

const usuariosGuardadosEnStorage = () => {
  const usuarioEnStorage = JSON.parse(localStorage.getItem("usuarios"));
  console.log(usuarioEnStorage);
  for (let i = 0; i < usuarioEnStorage.length; i += 1) {
    tabla.innerHTML += `
            <tr>
                <th>${i + 1}</th>
                <td>${usuarioEnStorage[i].nombre}</td>
                <td>${usuarioEnStorage[i].celular}</td>
                <td>${usuarioEnStorage[i].correo}</td>
                <td>${usuarioEnStorage[i].addres}</td>
                <td>${usuarioEnStorage[i].tipo}</td>
            <tr>
        `;

    console.log(usuarioEnStorage[i]);
  }
};
usuariosGuardadosEnStorage();

document.getElementById("limpiar").addEventListener("click", () => {
  localStorage.clear();
  tabla.innerHTML = "";
});
