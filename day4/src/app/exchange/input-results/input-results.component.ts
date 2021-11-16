import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { RatesService } from '../exchange.service';

@Component({
  selector: 'app-input-results',
  templateUrl: './input-results.component.html',
  styleUrls: ['./input-results.component.scss'],
})
export class InputResultsComponent implements OnInit {
  ratesObject = {};
  countInputs = [1];
  form1 = new FormControl('');
  form2 = new FormControl('');
  labelValue = 'AED';
  result = 0;
  inputValue = 'AED';

  constructor(private rateService: RatesService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.rateService.getRates().subscribe((data) => {
      this.ratesObject = data['rates'];
    });
  }

  getLabelValue(val: string) {
    this.labelValue = val;
    console.log(this.labelValue);
    // console.log(this.labelValue);
  }

  getInputValue(value: string) {
    this.inputValue = value;
    console.log(this.inputValue);
    return this.inputValue;
  }
  changes(changes: number) {
    Object.keys(this.ratesObject).forEach((rate) => {
      // console.log(rate);

      if (rate === this.labelValue) {
        // console.log(this.form1.valueChanges);
        // this.form1.valueChanges.subscribe((data) => {
        //   this.result += data;
        //   this.form2.setValue(this.result);
        // });
        this.result +=
          (this.ratesObject[rate] * changes) /
          this.ratesObject[this.inputValue];
        this.form2.setValue(this.result);
        console.log(changes);
        // result += this.form1.value * this.ratesObject[this.labelValue];
        //

        // console.log(this.form1.value);

        // console.log(rate);
      }
    });
  }

  addCurrency() {
    this.form1 = new FormControl('');
    this.result = 0;
    this.countInputs.push(this.countInputs[this.countInputs.length - 1] + 1);
    // console.log(this.countInputs);
  }
}
