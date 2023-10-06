const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  const email = $("#email").value;
  const senha = $("#senha").value;

  const tudoPreenchido =
    email.length !== 0 &&
    senha.length !== 0;

  if (tudoPreenchido === false) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  const usuarioCadastrado = {
    email,
    senha,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "./login.html";
});
