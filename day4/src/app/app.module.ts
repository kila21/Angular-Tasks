import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HttpClientModule } from '@angular/common/http';
import { RatesService } from './exchange/exchange.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, ExchangeComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [RatesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
