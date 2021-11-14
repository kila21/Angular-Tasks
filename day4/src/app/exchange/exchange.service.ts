import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RatesService {
  url =
    'http://api.exchangeratesapi.io/v1/latest?access_key=1eca10b9e7f58e6dbba48771dbcbddbb';

  constructor(private http: HttpClient) {}

  getRates(): Observable<object> {
    return this.http.get(this.url);
  }
}
