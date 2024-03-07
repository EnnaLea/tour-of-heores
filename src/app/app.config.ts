import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{ dataEncapsulation: false })
    ]),
    provideClientHydration(), provideHttpClient(), provideHttpClient(withFetch())]
  
};
