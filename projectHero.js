//                                  JORNADA DO HERÓI

// Na jornada do Heroi serão utilizados diversos comandos:
// Console.clear() > Para limpar a tela assim que seja dado o comando para executar o programa.
// Console.log(VAZIO) > Para pular uma linha.
// Console.log(variáveis) > Para imprimir as informações contidas nas variáveis.
// Prompt e +Prompt> Para o programa interagir com o usário.
// Math.ceil > Para arredondar o numero para cima

console.clear();
const prompt = require("prompt-sync")();
console.log();

const historia1 = `
No seu trajeto para o trabalho, o céu se abriu e uma nave apareceu derrepente, uma luz
muito forte saiu do centro da nave, e um ser foi teletransportado para fora dela, Você 
é um super heroi desfarçado e precisausar sua força para lutar caso necessário. 
Seu corpo está se recuperando de uma luta recente e você só pode usar até 50 pontos de
dano em seus adverários`;
console.log();

console.log(historia1);
console.log();

const forcaHeroi = +prompt("Digite quanto vai usar de força em cada golpe: ");
const forcaMontro = 3000;
const numGolpes = Math.ceil(forcaMontro / forcaHeroi);

console.log();
console.log(`Você está contra a parede, sucedeu que um alienígena cruzou seu caminho 
e está prestes a lhe atacar, então cada golpe seu equivale a ${forcaHeroi} de força e 
o alienigena tem ${forcaMontro} de força total, . Você vencerá o mostro após ${numGolpes} golpes`);
console.log();

let resp1 = prompt(
  "Você ainda possui forças para poder enfrentar este monstro? "
);
let resp2 = prompt(
  `Você tem a chance de atacá-lo utilizando sua rajada de socos 
  que desferem ${numGolpes - 25} golpes de uma só vez, deseja atacar agora?`
);
let resp3 = prompt(
  `O alinígena atacou, você pode se desviar do ataque, com seu poder DELAY ATAQUE, 
  porém ele tem duração de 10 segundos, porém não será o bastante para vencer seu 
  inimigo, \ndeseja utilizar DELAY DE ATAQUE agora? `
);
let resp4 = prompt(
  "Você ainda possui forças para poder enfrentar este monstro? "
);
let resp5 = prompt(
  "Você ainda possui forças para poder enfrentar este monstro? "
);

console.log();

const ocorrencia1 = (resp1.match(/sim/g) || []).length;
const ocorrencia2 = (resp2.match(/sim/g) || []).length;
const ocorrencia3 = (resp3.match(/sim/g) || []).length;
const ocorrencia4 = (resp4.match(/sim/g) || []).length;
const ocorrencia5 = (resp5.match(/sim/g) || []).length;

const strTotal = `Sua pontuação foi ${
  ocorrencia1 + ocorrencia2 + ocorrencia3 + ocorrencia4 + ocorrencia5
}`;

console.log();

if (strTotal > 0) {
  console.log("\nVocê falhou miseravelmente!.");
} else if (strTotal > 1 && 2) {
  console.log(
    "\nVocê chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.."
  );
} else if (strTotal >= 3) {
  console.log(
    "\nDepois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else if (strTotal >= 4 && 5) {
  console.log(
    "\nVocê triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}

console.log(typeof strTotal);
