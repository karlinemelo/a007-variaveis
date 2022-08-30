let a = prompt("O que voce comeu hoje?");
let b = prompt("O que vc comeu ontem");

let novoResultado = a;

a = b;
b = novoResultado;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
