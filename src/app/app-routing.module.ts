import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
// import { AuthGuard } from './_helpers';

const routes: Routes = [
  // {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: CreateOrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'order', component: OrderComponent,
  children: [
              { path: 'order-details', component: OrderDetailsComponent }
          ] }
  // { path: 'restaurants/:id', component: RestaurantDetailComponent,
  //       children: [
  //           { path: '', redirectTo: 'menu', pathMatch: 'full' },
  //           { path: 'menu', component: MenuComponent },
  //           { path: 'reviews', component: ReviewsComponent }
  //       ] },
  
   // otherwise redirect to home
  //  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
