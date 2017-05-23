import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepwiseModule  } from '../../src/stepwise.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StepwiseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
