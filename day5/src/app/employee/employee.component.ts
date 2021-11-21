import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  valueObject: user;
  // showValue = false;
  updateUserObject: user;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });
  showText = false;
  ngOnInit(): void {}

  getUser(id: number) {
    this.http.get(`https://reqres.in/api/users/${id}`).subscribe((user) => {
      this.valueObject = user['data'];

      // this.showValue = true;
    });
  }

  updateUser(id: number, val: any) {
    this.http
      .put(`https://reqres.in/api/users/${id}`, val)
      .subscribe((data) => {
        console.log(data);
        if (data.hasOwnProperty('updatedAt')) {
          this.showText = true;
        }
      });
  }

  // deleteID(id: number) {
  //   this.http.delete('https://reqres.in/api/users/2').subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}

class user {
  first_name: string;
  last_name: string;
  id: number;
  avatar: string;
  email: string;
}
