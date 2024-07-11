import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements  OnInit {

  producList: IProduct[] = [];
  private  _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProdutcs().subscribe((data: IProduct[]) => {
      console.log(data);
      this.producList = data;
    });
  }

  navegate(id: number) {
    console.log(id);
    this._router.navigate(['/products',id])
    //this._router.navigate([`/products/${id}`])
  }
}
