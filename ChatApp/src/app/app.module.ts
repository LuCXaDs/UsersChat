import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { WritebarComponent } from './components/writebar/writebar.component';
import { PrintmessageComponent } from './components/printmessage/printmessage.component';
// import { WriteBar } from '@angular/material/writebar';


@NgModule({
  declarations: [
    AppComponent,
    WritebarComponent,
    PrintmessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Mon Module
    // WriteBar,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
