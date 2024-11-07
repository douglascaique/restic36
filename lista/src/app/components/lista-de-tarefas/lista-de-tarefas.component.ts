import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent {
  tarefas = [
    { id: 1, title: 'Planejar reunião semanal', included: false },
    { id: 2, title: 'Revisar proposta de orçamento', included: false }
  ];

  addTask(title: string) {
    const newTask = { id: this.tarefas.length + 1, title, included: false };
    this.tarefas.push(newTask);
  }

  deleteTask(id: number) {
    this.tarefas = this.tarefas.filter(task => task.id !== id);
  }

  updateTaskStatus(id: number) {
    const task = this.tarefas.find(task => task.id === id);
    if (task) {
      task.included = !task.included;
    }
  }
}
