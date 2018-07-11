import { AngularFireDatabase } from 'angularfire2/database';
import { AppService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-test-app'),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [AppService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
