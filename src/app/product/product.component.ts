import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})


export class ProductComponent implements OnInit {

  productName : string;

  products =[];

  constructor() { 
  //this.productName ='tests';

  }

  ngOnInit(): void {
  }

  onAddProduct(){

    this.products.push(this.productName);
    console.log(this.products.toString());

    //alert('Priyanka is so sweet!' +  this.products.toString());

    this.productName='';

  }

}
