import { Category } from '@/shared';
import { Component, input, InputSignal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectChangeEvent, MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-category-select',
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './category-select.component.html',
  styleUrl: './category-select.component.scss'
})
export class CategorySelectComponent {
  categories: InputSignal<Category[]> = input.required<Category[]>();

  onSelectionChanged = output<Category[]>();

  onChange(event: MultiSelectChangeEvent): void {
    this.onSelectionChanged.emit(event.value as Category[]);
  }
}
