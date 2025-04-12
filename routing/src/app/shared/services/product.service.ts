import { Injectable } from '@angular/core';
import { distinct, EMPTY, empty, filter, map, Observable, of } from 'rxjs';
import { Category, Product } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: "019620a9-2af2-7395-b9c7-fdfd78972b72",
      name: "Product 1",
      description: "Description for product 1",
      price: 100,
      category: Category.Electronics
    },
    {
      id: "019620aa-bdb0-7a18-84e4-0c8f09331626",
      name: "Product 2",
      description: "Description for product 2",
      price: 999,
      category: Category.Clothing
    },
    {
      id: "019620aa-e1f1-7fc8-8dc4-88efde11956b",
      name: "Product 3",
      description: "Description for product 3",
      price: 2,
      category: Category.Home
    },
    {
      id: "019620ab-002a-7040-9e6b-084085761d55",
      name: "Product 4",
      description: "Description for product 4",
      price: 4.99,
      category: Category.Home
    }
  ];

  private products$: Observable<Product[]> = of(this.products);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(productId: string): Observable<Product> {
    let product: Product | undefined = this.products.find((p: Product) => p.id == productId);

    if (product == undefined) {
      return EMPTY;
    }

    return of(product);
  }

  getDistinctCategoriesOfProducts(products: Product[]): Category[] {
    const categories: Set<Category> = new Set<Category>();

    products.map((p: Product) => categories.add(p.category));

    return Array.from(categories);
  }
}
