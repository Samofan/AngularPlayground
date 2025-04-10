import { Category } from '@/shared';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-select',
  imports: [],
  templateUrl: './category-select.component.html',
  styleUrl: './category-select.component.scss'
})
export class CategorySelectComponent {
  availableCategories = input.required<Category[]>();
}
