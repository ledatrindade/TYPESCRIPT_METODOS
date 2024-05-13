

const alunas = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } }, // 7
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } }, //7
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } }, // 8
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } }, // 9
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } }, // 8
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } }, // 5
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },// 7
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },// 5
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } }, // 3
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },// 7
]

//questão 1
const media = alunas.map(a => ((a.prova.p1 + a.prova.p2 + a.prova.p3) / 3).toFixed(1));
console.log("as médias das alunas são: " + media.join(', '));


//questão 2
const aprovadas = alunas.filter(a => {
    const media = (a.prova.p1 + a.prova.p2 + a.prova.p3) / 3;
    return media >= 7;
}).map(a => a.nome);
console.log("\n\nas alunas aprovadas são: " + aprovadas.join(', '));

//questão 3
const reprovadas = alunas.filter(a => {
    const media = (a.prova.p1 + a.prova.p2 + a.prova.p3) / 3;
    return media >= 7;
}).map(a => a.nome);
console.log("\n\nas alunas reprovadas são: " + reprovadas.join(', '));

// questão 4
const resultado = alunas.map(a => {
    const media = parseFloat(((a.prova.p1 + a.prova.p2 + a.prova.p3) / 3).toFixed(1));
    const aprovada = media >= 7;
    return { nome: a.nome, media, aprovada };
});

console.log(resultado);

//questão 5
const Maiornota = alunas.sort((a, b) => {
    const mediaA = (a.prova.p1 + a.prova.p2 + a.prova.p3) / 3;
    const mediaB = (b.prova.p1 + b.prova.p2 + b.prova.p3) / 3;
    return mediaB - mediaA; // ordem decrescente
})[0].nome;

console.log("\n\na aluna com maior média foi: " + Maiornota);

//questão 6
const Menornota = alunas.sort((b, a) => {
    const mediaA = (a.prova.p1 + a.prova.p2 + a.prova.p3) / 3;
    const mediaB = (b.prova.p1 + b.prova.p2 + b.prova.p3) / 3;
    return mediaB - mediaA; // ordem crescente
})[0].nome;

console.log("\n\na aluna com menor média foi: " + Menornota);

