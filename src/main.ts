import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { importProvidersFrom } from '@angular/core';
import { InMemoryDataService } from './app/in-memory-data.service';


bootstrapApplication(AppComponent,
{  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    ]),
  ]}
  
  )
  .catch((err) => console.error(err));
