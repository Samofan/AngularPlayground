import { Product, ProductService } from '@/shared';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  product: Product | undefined;

  ngOnInit(): void {
      this.route.paramMap.pipe(
        switchMap(params => {
          const productId = params.get('id') || '';
          return this.productService.getProductById(productId);
        })
      ).subscribe(value => this.product = value);
  }
}
