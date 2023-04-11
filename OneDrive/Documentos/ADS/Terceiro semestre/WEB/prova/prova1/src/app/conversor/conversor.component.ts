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
    //verificar se foi selecionado alguma moeda
    if (!isNaN(numeroConvertido1) && !isNaN(numeroConvertido2)) {
      //if com todas as possibilidade do primeiro imput
      if (numeroConvertido1 == 1 && numeroConvertido2 == 1) { // de real para real
        this.result = this.ValorCambio = this.ValorDesejado;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 2) { 
        //real para Dolar
        this.result = this.ValorCambio * this.ValorDesejado;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 3) {
        this.ValorCambio = this.ValorDesejado * 100;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 1) {
        this.ValorCambio = this.ValorDesejado * 1000;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 2) {
        this.ValorCambio = this.ValorDesejado;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 3) {
        this.ValorCambio = this.ValorDesejado * 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 1) {
        this.ValorCambio = this.ValorDesejado / 100;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 2) {
        this.ValorCambio = this.ValorDesejado / 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 3) {
        this.ValorCambio = this.ValorDesejado * 100000;
      } else {
        this.setMesagemError('Operação invalida');
      }
    } else {
      this.setMesagemError('Selecione a moeda dos dois campos!');
    }
  }
  verificacao2() {
    const numeroConvertido1: number = parseInt(this.opcao1); //Converte a strig para numero
    const numeroConvertido2: number = parseInt(this.opcao2); //Converte a strig para numero
    //verificar se foi selecionado alguma medida
    if (!isNaN(numeroConvertido1) && !isNaN(numeroConvertido2)) {
      //if com todas as possibilidade do primeiro imput
      if (numeroConvertido1 == 1 && numeroConvertido2 == 1) {
        this.ValorDesejado= this.ValorCambio;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 2) {
        this.ValorDesejado = this.ValorCambio / 1000;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 3) {
        this.ValorDesejado = this.ValorCambio * 100;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 1) {
        this.ValorDesejado = this.ValorCambio * 1000;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 2) {
        this.ValorDesejado = this.ValorCambio;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 3) {
        this.ValorDesejado = this.ValorCambio * 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 1) {
        this.ValorDesejado = this.ValorCambio / 100;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 2) {
        this.ValorDesejado = this.ValorCambio / 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 3) {
        this.ValorDesejado = this.ValorCambio * 100000;
      } else {
        this.setMesagemError('Operação invalida');
      }
    } else {
      this.setMesagemError('Selecione a medida dos dois campos!');
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
