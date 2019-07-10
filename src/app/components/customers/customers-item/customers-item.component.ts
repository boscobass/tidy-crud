import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../interfaces/customer';

@Component({
  selector: 'app-customers-item',
  templateUrl: './customers-item.component.html',
  styleUrls: ['./customers-item.component.css']
})
export class CustomersItemComponent implements OnInit {

  @Input()
  customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
