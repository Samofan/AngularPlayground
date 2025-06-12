import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public disabled: boolean = false;
  public isExpressive: boolean = true;;

  public onClick($event: MouseEvent): void {
    console.log('Button clicked!', $event);
  }

  public onMouseEnter($event: MouseEvent): void {
    console.log('Mouse entered button!', $event);
  }

  public onMouseLeave($event: MouseEvent): void {
    console.log('Mouse left button!', $event);
  }

}
