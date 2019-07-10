import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';


const routes: Routes = [
  {path: '', component: CustomersListComponent},
  {path: 'customer/:action/:id', component: CustomersListComponent},
  {path: 'customer/:action', component: CustomersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
