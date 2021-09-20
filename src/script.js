function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("endereço de filme invalido");
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");

  elementoListaFilmes.innerHTML =
    elementoFilmeFavorito + elementoListaFilmes.innerHTML;
}

/*
function adicionarFilme() {
  //recebe o que esta no input
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    // criar um variavel que vai formular um tag IMG e receber oq está no input
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    // criar uma variavel pra apontar pra div que vai exibir
    var elementoListaFilmes = document.getElementById("listaFilmes");

    // então a div vai mostra o que tiver no input (e vai adicionar)
    elementoListaFilmes.innerHTML =
      elementoFilmeFavorito + elementoListaFilmes.innerHTML;
  } else {
    console.error("endereço de filme invalido");
  }

  document.getElementById("filme").value = "";
}
*/
