// Angular
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Libraries
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
// App
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavService } from './shared/services';
import { SidenavState, UserState } from './shared/states';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // State Management
    NgxsModule.forRoot([
      SidenavState,
      UserState,
    ], {
      developmentMode: !environment.production,
    }),

    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),

    // Translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    // App
    AppRoutingModule,

  ],
  providers: [
    NavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
