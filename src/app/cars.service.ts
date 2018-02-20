
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CarsService {
  constructor(private http: Http) {}

  getCars() {
    return this.http.get('http://localhost:3000/cars');
  }
}
