import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DatabindingComponent } from "./databinding/databinding.component";
import { EventBindingComponent } from "./databinding/event-binding.component";
import { PropertyBindingComponent } from "./databinding/property-binding.component";
import { TwoWayBindingComponent } from "./databinding/two-way-binding.component";


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
