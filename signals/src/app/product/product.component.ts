import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CategorySelectComponent } from './category-select/category-select.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { Category, Product, ProductService } from '@/shared';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product',
  imports: [CategorySelectComponent, ProductTableComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private readonly productService = inject(ProductService);

  // All products from product service.
  readonly allProducts = toSignal(
    this.productService.getProducts(),
    { initialValue: [] }
  );

  // Selected categories from category select component.
  private readonly selectedCategories = signal<Category[]>([]);

  // Filtered products based on selected categories.
  readonly filteredProducts = computed(() => {
    const selected = this.selectedCategories();
    const all = this.allProducts();

    if (selected.length === 0) return all;

    return all.filter(p =>
      selected.some(c => c === p.category)
    );
  });

  // Distinct categoriies of all products.
  readonly availableCategories = computed(() =>
    this.productService.getDistinctCategoriesOfProducts(this.allProducts())
  );

  onCategorySelected(categories: Category[]) {
    this.selectedCategories.set(categories);
  }
}
