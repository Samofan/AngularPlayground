import { Product } from '@/shared';
import { Component, input, InputSignal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-product-table',
  imports: [TableModule, Tag],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {
  products: InputSignal<Product[]> = input.required<Product[]>();
}
