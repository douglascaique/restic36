import { Routes } from '@angular/router';
import { AuthGuard} from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: ListaDeTarefasComponent },
  { path: 'lista-de-tarefas', component: ListaDeTarefasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
