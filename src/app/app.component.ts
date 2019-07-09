import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from './services/customer.service';
import {Customer} from './interfaces/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tidy-crud';

  constructor(private service: CustomerService) {}

}
