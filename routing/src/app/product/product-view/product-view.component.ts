import { Product } from '@/shared';
import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-view',
  imports: [RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent {
  product: InputSignal<Product> = input.required<Product>();
}
