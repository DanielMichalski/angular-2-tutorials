import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go home</button>
      <hr>
      {{ id }}
    `
})
export class UserComponent implements OnDestroy {

  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      params => this.id = params['id']
    );
  }

  onNavigate() {
    this.router.navigate([''], {queryParams: {'analitics': 100}, fragment: 'section1'});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
