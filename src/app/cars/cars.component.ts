import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  cars: Car[] = [];

  ngOnInit(): void {
  }

  submit(form: any){
    let car = this.cars.find((val) => val.category === form.value.category);
    if(car){
      car.model.push(form.value.model);
    }
    else{
      let obj: Car = {
        category: form.value.category,
        model: [form.value.model]
      }
      this.cars.push(obj)
    }

    console.log(this.cars);
  }

}

export interface Car{
  category: string;
  model: string[];
}
