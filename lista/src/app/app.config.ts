import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAuth0 } from '@auth0/auth0-angular';

const isBrowser = () => typeof window !== 'undefined';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
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
};
