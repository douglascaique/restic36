import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="not-found">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está tentando acessar não existe.</p>
      <a routerLink="/">Voltar para a página inicial</a>
    </div>
  `,
  styles: [`
    .not-found {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class NotFoundComponent {}
