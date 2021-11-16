import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HttpClientModule } from '@angular/common/http';
import { RatesService } from './exchange/exchange.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputResultsComponent } from './exchange/input-results/input-results.component';
@NgModule({
  declarations: [AppComponent, ExchangeComponent, InputResultsComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [RatesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
