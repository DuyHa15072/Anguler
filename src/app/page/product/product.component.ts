import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  componentName: string ='products component';
  isStatus: boolean = false
  productName: string=""
  productsList : {id: number, name: string,  price: number, status: boolean}[]= [
    {id: 1 , name: 'producst A', price: 500 ,status: true},
    {id: 2 , name: 'producst B', price: 500,status: false},
    {id: 3 , name: 'producst C', price: 500,status: true}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick(){
    this.isStatus = true
  }
  onHandleDelete(id: number){
    this.productsList = this.productsList.filter(product => product.id !== id)
  }
}
