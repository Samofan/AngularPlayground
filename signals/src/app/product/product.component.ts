import { Component, inject, OnInit } from '@angular/core';
import { CategorySelectComponent } from './category-select/category-select.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { Category, Product, ProductService } from '@/shared';

@Component({
  selector: 'app-product',
  imports: [CategorySelectComponent, ProductTableComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  private readonly productService = inject(ProductService);

  availableCategories: Category[] = [];
  selectedCategories: Category[] = [];
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.availableCategories =
        this.productService.getDistinctCategoriesOfProducts(this.products);
    });
  }

  onCategorySelected(selectedCategories: Category[]): void {
    this.selectedCategories = selectedCategories;

    if (this.selectedCategories.length === 0) {
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
      });
    } else {
      this.productService.getProducts().subscribe((products) => {
        this.products = products.filter((product) =>
          this.selectedCategories.some(
            (category) => category === product.category
          )
        );
      });
    }
  }
}
