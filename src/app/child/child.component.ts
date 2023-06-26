import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() vehicleData !: string[];
  @Output() dataToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(vehicle: string){
    this.dataToParent.emit({vehicle})
  }

}
