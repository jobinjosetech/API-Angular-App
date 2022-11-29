import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passenger-app',
  templateUrl: './passenger-app.component.html',
  styleUrls: ['./passenger-app.component.css']
})
export class PassengerAppComponent {
  constructor(private api:ApiService){
    api.passengerData().subscribe(
      (response)=>{
        this.passengers = response
      }
    )
  }
  passengers:any = {}
}
