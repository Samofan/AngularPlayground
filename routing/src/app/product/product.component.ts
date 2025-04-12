import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '@shared';
import { ProductViewComponent } from "./product-view/product-view.component";

@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductViewComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private readonly productService: ProductService = inject(ProductService);

  readonly allProducts = toSignal(
    this.productService.getProducts(),
    { initialValue: [] }
  );
}
