
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarsService {
  constructor(private http: Http) {}

  getCars() {
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http
      .get('http://localhost:3100/cars', {
        headers: headers
      })
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        return Observable.throw('Server not response. Try later');
      });
  }

  addCar(carName: string, carColor: string) {
    const data = {
      name: carName,
      color: carColor
    };
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.post('http://localhost:3000/cars', data, {
      headers: headers
    })
      .map((response: Response) => {
        return response.json();
      });
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteCar(car: any) {
    return this.http.delete( `http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
