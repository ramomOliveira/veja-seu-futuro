const res = document.querySelector('#resposta');
const inputPergunta = document.querySelector('#inputPergunta')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

let timeout = null;

function fazerPergunta() {

  if (inputPergunta.value == '') {
    alert('Por favor, digite uma pergunta.');
    return;
  }
  clearTimeout(timeout)

  const totalRespostas = respostas.length
  const numAleatorio = () => Math.floor(Math.random() * totalRespostas)
  const pergunta = "<div>" + inputPergunta.value + "</div>";
  res.innerHTML = pergunta + respostas[numAleatorio()]
  inputPergunta.value = ''
  res.style.opacity = 1;


  timeout = setTimeout(() => {
    res.style.opacity = 0;
  }, 5000)
  

}
