
export class Cliente {
    nome: string = "";
    idade: number = 0;
    cpf: number = 0;
    endereco: string = "";
    telefone: string = "";


constructor (nome: string, idade: number, cpf: number, endereco: string, telefone: string){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    }



validarTelefone (telefone: string): void {
    this.telefone = telefone;
    if (telefone.toString().length < 10 || telefone.toString().length > 11) {
        throw new Error ("Telefone Inválido ")
    }
}

atualizarTelefone (novoTelefone : string): void {
    this.telefone = novoTelefone;
    this.validarTelefone(novoTelefone);

}

atualizarEndereco (novoEndereco : string): void {
    this.endereco = novoEndereco;

}



}
