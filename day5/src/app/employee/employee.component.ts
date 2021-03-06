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
  valueObject: user[];
  // showValue = false;
  updateUserObject: user;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl(1000, Validators.required),
    age: new FormControl(18, Validators.required),
  });
  showText = false;
  showTextDelete = false;
  pageObject: user;
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

  deleteUser(id: number) {
    this.http.delete(`https://reqres.in/api/users/${id}`).subscribe((data) => {
      if (data === null) {
        this.showTextDelete = true;
      }
      console.log(data);
    });
  }

  getPage(num: number) {
    this.http
      .get(`https://reqres.in/api/users?page=${num}`)
      .subscribe((data) => {
        this.pageObject = data['data'];
        console.log(this.pageObject);
      });
  }
}

class user {
  first_name: string;
  last_name: string;
  id: number;
  avatar: string;
  email: string;
}
