import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard, provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { ListaDeTarefasComponent } from './app/components/lista-de-tarefas/lista-de-tarefas.component';
import { LoginComponent } from './app/components/login/login.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

const isBrowser = () => typeof window !== 'undefined';

const routes: Route[] = [
  { path: '', component: ListaDeTarefasComponent },
  { path: 'lista-de-compras', component: ListaDeTarefasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule
    ),
    provideAuth0({
      domain: 'dev-lv32ykab07xgzuky.us.auth0.com',
      clientId: 'EfF7HnWO0YWhPFxV2VlQJlSzMrPUlr08',
      authorizationParams: {
        redirect_uri: isBrowser() ? window.location.origin : '',
        audience: 'https://dev-lv32ykab07xgzuky.us.auth0.com/api/v2/',
        scope: 'openid profile email',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage'
    }),
  ],
}).catch((err) => console.error(err));;
