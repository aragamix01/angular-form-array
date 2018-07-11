import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Province } from '../models/province';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'https://saintarmy-cheche48.firebaseio.com/province.json';

  constructor(private http: HttpClient) { }

  getProvinces(): Observable<Province[]> {
    return <any>this.http.get(this.url);
  }
}
