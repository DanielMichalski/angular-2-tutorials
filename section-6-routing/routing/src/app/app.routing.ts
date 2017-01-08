import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
