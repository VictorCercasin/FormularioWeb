const wrapper = document.getElementById("wrapper");
const form = document.getElementById("main-form");
const submit = document.getElementById("submit");

let nome = document.getElementById("nome");
let telefone = document.getElementById("telefone");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");

function gotData(e) {
  e.preventDefault();
  sessionStorage.setItem("nome", nome.value);
  sessionStorage.setItem("telefone", telefone.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("mensagem", mensagem.value);
  window.location.href = "./agradecimento.html";
}
submit.addEventListener("click", gotData);
