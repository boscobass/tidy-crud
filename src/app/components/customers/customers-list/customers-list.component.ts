import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { CustomerService } from '../../../services/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NgbModal, NgbModalConfig, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CustomersDetailComponent} from '../customers-detail/customers-detail.component';
import {CustomersEditComponent} from '../customers-edit/customers-edit.component';
import {CustomersNewComponent} from '../customers-new/customers-new.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  actions: Map<string, Component>;
  modal: NgbModalRef;

  constructor(private service: CustomerService, private route: ActivatedRoute, private modalService: NgbModal, private router: Router, config: NgbModalConfig) {
    this.actions = new Map<string, Component>();
    this.actions['details'] = CustomersDetailComponent;
    this.actions['update'] = CustomersEditComponent;
    this.actions['new'] = CustomersNewComponent;

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    return this.service.getCostumers().subscribe((data: Customer[]) => {
      this.customers = data;
      this.openModalByAction(this.route.snapshot.paramMap.get('action'));
    });
  }

  getCustomerById(id: number): void {
    this.customers.forEach((item) => {
      if (item.id === id) {
        this.customer = item;
      }
    });
  }

  openModalByAction(action: string): void {
    if (action) {
      const modalRef = this.modalService.open(this.actions[action]);
      this.getCustomerById(Number(this.route.snapshot.paramMap.get('id')));
      modalRef.componentInstance.customer = this.customer;
      modalRef.componentInstance.modal = modalRef;
    }
  }

}
