import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  listaMercado : Todo[] = [];
  novaListaMercado : string;
  item: any;
  i: any;

  saveList(){
    // localStorage.setItem('listaMercado', JSON.stringify(this.listaMercado))

    if(this.novaListaMercado){
      let item = new Todo();
      item.name = this.novaListaMercado;
      item.estaCompleto = true;
      this.listaMercado.push(item);
      this.novaListaMercado = '';
    }else{
      alert('Lista vazia, por favor, adicione um item.')
    };
    
    this.listaMercado.push({name: this.novaListaMercado, estaCompleto: false});
    this.novaListaMercado = '';
  }
}


