let comeco = ("Importante resaltar respostas escritas diferente do modelo não serão consideradas.\nMODELO: se a resposta for SIM digite 1, se sua resposta for NÃO digite 0.");
console.log(comeco);

let telefone = +prompt("Telefonou para a vítima?");
let local = +prompt("Esteve no local do crime?");
let moradia = +prompt("Mora perto da vítima?");
let devia = +prompt("Devia para vítima?");
let trabalho = +prompt("Já trabalhou com a vítima?");

let total = telefone + local + moradia + devia + trabalho;

if(total == 0) {
  console.log("Você é Inocente"); 
} else if(total == 1) {
  console.log("Você é Inocente!");
} else if(total == 2) {
  console.log("Você é Suspeito!");
} else if(total == 3) {
  console.log("Você é Cúmplice!"); 
} else if (total == 4) {
  console.log("Você é Cúmplice!");
} else if (total == 5) {
  console.log("Você é o assasino!");
};

