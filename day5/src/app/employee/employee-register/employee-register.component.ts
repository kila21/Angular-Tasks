import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss'],
})
export class EmployeeRegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  endpoint: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onRegister() {
    // console.log(this.form.value);
    this.endpoint = '/creat';
    this.http
      .post('https://reqres.in/api/users' + this.endpoint, this.form.value)

      // .post(
      //   'http://dummy.restapiexample.com/api/v1' + this.endpoint,
      //   this.form.value
      // )
      .subscribe((data) => {
        console.log(data);
      });

    this.form.reset();
  }
}
