"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 29;
// numbers
let idade = 29;
// idade = '29';
idade = 29.5;
console.log(idade);
// boolean
let possuiHobbies = true;
// possui hobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
// let minhaIdade;
// let minhaIdade: any;
let minhaIdade;
minhaIdade = 29;
console.log(typeof minhaIdade);
// minhaIdade = '29';
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 'Cozinhar'];
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 4000, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 1] = "Laranja";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; // 100
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul, Cor.Amarelo, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
