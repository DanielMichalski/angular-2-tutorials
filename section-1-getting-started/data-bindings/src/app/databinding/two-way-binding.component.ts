import { Component } from '@angular/core';

@Component({
    selector: 'fa-two-way-binding',
    template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `
})
export class TwoWayBindingComponent {
    person = {
        name: 'Max',
        age: 27
    };
}
