const formRegistro = document.getElementById("formRegistro");

let listaDeUsuario = [];

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = document.getElementById("name").value;
  const inputCel = document.getElementById("cel").value;
  const inputEmail = document.getElementById("email").value;
  const inputAddres = document.getElementById("addres").value;
  const inputTipo = document.getElementById("tipo").value;

  const usuario = {
    nombre: inputName,
    celular: inputCel,
    correo: inputEmail,
    direccion: inputAddres,
    tipo: inputTipo
  };
  guardarEnStorage(usuario);
});

const guardarEnStorage = (usuario) => {
  if (localStorage.getItem("usuarios") == null) {
    listaDeUsuario.push(usuario);
    const usuariosString = JSON.stringify(listaDeUsuario);
    localStorage.setItem("usuarios", usuariosString);
  } else {
    listaEnStorage = JSON.parse(localStorage.getItem("usuarios"));
    listaEnStorage.push(usuario);
    const usuariosString = JSON.stringify(listaEnStorage);
    localStorage.setItem("usuarios", usuariosString);
  }
};
