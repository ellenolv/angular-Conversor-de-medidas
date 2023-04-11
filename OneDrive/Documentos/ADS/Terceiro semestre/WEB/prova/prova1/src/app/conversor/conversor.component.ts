import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  //valor desejado
  Vdesejad : number = 78;
  Vcambio : number = 78;
  result : number = 59;


  //opção selecionada
   calc(){

   }
   limpar(){
    this.Vcambio = 0;
    this.Vdesejad = 0;
    this.result = 0;
  }
  
}
