interface Humano {
  nome: string
  // atributo opcional
  idade?: number
  // nome do atributo dinamico
  [prop: string]: any
  // todos que aderem a essa interface precisa definir esse método
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
  console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: Humano){
  pessoa.nome = 'Joana';
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' 
      + this.nome + ' ' + sobrenome); 
  }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 29, /*programador: true*/ programador: 'sim' });
pessoa.saudar('SkyWalker');

// Usando Classes...
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string): void {
    console.log('Olá meu nome é '
      + this.nome + ' ' + sobrenome);
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, expoente: number) : number {
  // Math.pow(base, expoente)
  // return Array(expoente).fill(base).reduce((t, a) => t * a);
  return base ** expoente;
}

console.log(potencia(3, 10));