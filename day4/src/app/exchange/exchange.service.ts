import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RatesService {
  url =
    'http://api.exchangeratesapi.io/v1/latest?access_key=a94f29dc89a2374583467c17939674da';

  constructor(private http: HttpClient) {}

  getRates(): Observable<object> {
    return this.http.get(this.url);
  }
}
