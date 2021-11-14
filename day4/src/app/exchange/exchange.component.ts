import { Component, OnInit } from '@angular/core';
import { RatesService } from './exchange.service';
import { FormControl } from '@angular/forms';
import { keyframes } from '@angular/animations';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {
  ratesObject = {};
  form1 = new FormControl('');
  form2 = new FormControl('');
  currency1: string = 'AED';
  currency2: string = 'AED';
  constructor(private rateService: RatesService) {}

  ngOnInit(): void {
    this.rateService.getRates().subscribe((data) => {
      if (data.hasOwnProperty('rates')) {
        this.ratesObject = data['rates'];
        // console.log(this.ratesObject);
      }
    });
  }

  selectedValueCurrency1(value: string) {
    this.currency1 = value;
  }

  selectedValueCurrency2(value: string) {
    this.currency2 = value;
  }

  changeValue1 = false;
  changeValue2 = false;
  getChange1(value: any) {
    this.changeValue1 = true;
    this.changeValue2 = false;
  }

  getChange2(value: any) {
    this.changeValue2 = true;
    this.changeValue1 = false;
  }

  convert() {
    Object.keys(this.ratesObject).forEach((rateKey) => {
      if (rateKey === this.currency1) {
        Object.keys(this.ratesObject).forEach((rateKey2) => {
          if (rateKey2 === this.currency2) {
            if (this.changeValue1) {
              this.form2 = new FormControl(
                (this.form1.value * this.ratesObject[this.currency2]) /
                  this.ratesObject[this.currency1]
              );
            } else {
              this.form1 = new FormControl(
                (this.form2.value * this.ratesObject[this.currency1]) /
                  this.ratesObject[this.currency2]
              );
            }
          }
        });
      }
    });
  }
}
