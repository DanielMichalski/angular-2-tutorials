import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 100;

  onSwitch(): void {
    this.switch = !this.switch;
  }

}
