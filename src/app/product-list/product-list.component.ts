import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
    public rowIndex!: number;
    showAddProduct!: boolean;
  
    constructor() {}
  
    ngOnInit(): void {}
  products = [
    { id: 1, name: 'Product A', price: 100, availability: true },
    { id: 2, name: 'Product B', price: 200, availability: false },
    { id: 3, name: 'Product C', price: 300, availability: true },
    { id: 4, name: 'Product D', price: 150, availability: true },
    { id: 5, name: 'Product E', price: 250, availability: false },
    { id: 6, name: 'Product F', price: 350, availability: true },
    { id: 7, name: 'Product G', price: 400, availability: false },
    { id: 8, name: 'Product H', price: 500, availability: true },
    { id: 9, name: 'Product I', price: 450, availability: true },
    { id: 10, name: 'Product J', price: 600, availability: false }
  ];
  //rowIndex =1;
  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

}
