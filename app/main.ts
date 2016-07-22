import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';

import { InMemoryBackendService,SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  {provide:XHRBackend,userClass:InMemoryBackendService},
  {provide:SEED_DATA,userClass:InMemoryDataService}
]);