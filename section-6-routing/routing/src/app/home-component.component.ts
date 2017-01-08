import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    {{ params }}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {

  private subscription: Subscription;

  params: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe(
      queryParams => this.params = queryParams['analitics']
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
