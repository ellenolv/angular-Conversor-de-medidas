import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  // variaveis
  opcao1: string = 'Medidas';
  opcao2: string = 'Medidas';

  //numeros digitados
  medida1!: number;
  medida2!: number;
  result! : number;

  mensagemError: string = '';

  calc() {
    const numeroConvertido1: number = parseInt(this.opcao1); //Converte a strig para numero
    const numeroConvertido2: number = parseInt(this.opcao2); //Converte a strig para numero
    //verificar se foi selecionado alguma moeda
    if (!isNaN(numeroConvertido1) && !isNaN(numeroConvertido2)) {
      //if com todas as possibilidade do primeiro imput
      if (numeroConvertido1 == numeroConvertido2) { 
        // medidas iguais
        this.result = this.medida2;

      } else if(numeroConvertido1 == 1 && numeroConvertido2 == 2){ 
        //de KM/h para M/S
        this.result =  this.medida1 / 3.6;
      } 
      else if(numeroConvertido1 == 1 && numeroConvertido2 == 3){ 
        //  km/h para mph
        this.result =  this.medida1 / 1.61;
      } 
      else if(numeroConvertido1 == 2 && numeroConvertido2 ==1){ 
        //  m/s para k/h
        this.result =  this.medida1 * 3.6 ;
      } 
      else if(numeroConvertido1 == 2 && numeroConvertido2 == 3){ 
        //  m/s para k/h
        this.result =  this.medida1 * 2.24;
      }
      else if(numeroConvertido1 == 3 && numeroConvertido2 ==1){ 
        //  m/s para k/h
        this.result =  this.medida1 * 1.61 ;
      }
      else if(numeroConvertido1 == 3 && numeroConvertido2 ==2){ 
        //  m/s para k/h
        this.result =  this.medida1 / 2.24 ;
      }
     
    } else{
      this.setMesagemError('Selecione a moeda dos dois campos!');
    }
  }
  //função para mostrar mensagem de erro
  setMesagemError(mensagem: string) {
    this.mensagemError = mensagem;
  }

  limpar(){
    this.medida2 = 0 ;
    this.medida1 = 0 ;
    this.result = 0;
  }
}
  