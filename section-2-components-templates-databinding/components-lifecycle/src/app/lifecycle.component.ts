import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{ bindable }}</p>
    <p>{{ boundParagraph.textContent }}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph') boundParagraph : HTMLElement;

  @ContentChild('boundContent') boundContent : HTMLElement;

  constructor() {
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
