import {Component} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [];

  constructor(private carsServices: CarsService) {}

  loadCars() {
    this.carsServices
      .getCars()
      .subscribe((response) => {
        console.log(response);
      });
  }

}
