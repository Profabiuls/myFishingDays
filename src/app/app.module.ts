import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { DatiService } from './service/service';
@NgModule({
  declarations: [
    AppComponent,
    DaysComponent
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [DatiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
