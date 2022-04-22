// string
let nome: string = 'João';
console.log(nome);
// nome = 29;

// numbers
let idade: number = 29;
// idade = '29';
idade = 29.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = true;
// possui hobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
// let minhaIdade;
// let minhaIdade: any;
let minhaIdade: number;
minhaIdade = 29;
console.log(typeof minhaIdade);
// minhaIdade = '29';

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 'Cozinhar'];
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua Importante", 4000, "Bloco C"];
console.log(endereco);

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul, // 101
  Laranja = 1, // 1 
  Amarelo, // 2
  Vermelho = 100 // 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor);
console.log(Cor.Azul, Cor.Amarelo, Cor.Vermelho);

// any
let carro: any = 'BMW';
console.log(carro);
carro = {marca: 'BMW', ano: 2019};
console.log(carro);