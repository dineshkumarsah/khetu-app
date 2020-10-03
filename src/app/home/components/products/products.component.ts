import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {ProductService} from 'src/app/home/services/product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this. getAllProduct()
  }

  getAllProduct(){
    let category=["4","6","8"];
    let categoryObservable = [];
    for(let i=0;i<category.length;i++){
      categoryObservable.push(this.productService.getProductByCategoryId(category[i]))
    }
    forkJoin(categoryObservable).subscribe({
      next: (res:Product[]) => {
        console.log(res);
        
      for(let i=0;i<res.length;i++){
       this.products.push(res[i]['items'])
      }
      console.log(this.products);
      
      }
    })

  }

  

}
