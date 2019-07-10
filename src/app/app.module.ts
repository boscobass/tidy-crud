import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomersItemComponent } from './components/customers/customers-item/customers-item.component';
import { CustomersDetailComponent } from './components/customers/customers-detail/customers-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersEditComponent } from './components/customers/customers-edit/customers-edit.component';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { CustomersNewComponent } from './components/customers/customers-new/customers-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomersListComponent,
    CustomersItemComponent,
    CustomersDetailComponent,
    CustomersEditComponent,
    CustomersNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
  entryComponents: [CustomersDetailComponent, CustomersEditComponent, CustomersNewComponent]
})
export class AppModule { }
