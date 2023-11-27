import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxErrorModule } from '@aposin/ng-aquila/base';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NxErrorModule,
    NxCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
