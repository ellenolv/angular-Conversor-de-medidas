import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  // variaveis
  opcao1: string = 'Moedas';
  opcao2: string = 'Moedas';

  //numeros digitados
  ValorDesejado!: number;
  ValorCambio!: number;
  result! : number;

  mensagemError: string = '';

  verificacao1() {
    const numeroConvertido1: number = parseInt(this.opcao1); //Converte a strig para numero
    const numeroConvertido2: number = parseInt(this.opcao2); //Converte a strig para numero
    //verificar se foi selecionado alguma medida
    if (!isNaN(numeroConvertido1) && !isNaN(numeroConvertido2)) {
      //if com todas as possibilidade do primeiro imput
      if (numeroConvertido1 == numeroConvertido2) { // de moedas iguais
        this.result = this.ValorCambio;
      } else{ 
        //
        this.result =  this.ValorDesejado / this.ValorCambio ;
      
      }
    } else {
      this.setMesagemError('Selecione a moeda dos dois campos!');
    }
  }

  //função para mostrar mensagem de erro
  setMesagemError(mensagem: string) {
    this.mensagemError = mensagem;
  }

  limpar(){
    this.mensagemError = '';
  }
}
