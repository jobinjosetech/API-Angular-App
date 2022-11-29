import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  constructor(private api:ApiService){
    api.productData().subscribe(
      (response)=>{
        this.data = response
      }
    )
  }
  data:any = {}
}
