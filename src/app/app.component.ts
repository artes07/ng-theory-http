import {Component} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars: Cars[] = [];
  carName: string = '';
  carColor: string = '';
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ];

  constructor(private carsServices: CarsService) {}

  loadCars() {
    this.carsServices
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      });
  }

  addCar() {
    this.carsServices
      .addCar(this.carName, this.carColor)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
    this.carColor = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsServices.changeColor(car, this.getRandColor())
      .subscribe((data) => {});
  }

  deleteCar(car: Cars) {
    this.carsServices.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

}
