import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Foodclass} from '../foodclass'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newFood=new Foodclass('',0,'')

@Output()Preview=new EventEmitter<Foodclass>();

  constructor() {

   }

  submit(login:any) {
    this.Preview.emit(this.newFood)
  }

  ngOnInit(): void {
  }

}
