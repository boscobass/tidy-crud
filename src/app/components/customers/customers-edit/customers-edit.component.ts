import {Component, Input, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Customer} from '../../../interfaces/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {

  @Input() modal: NgbModalRef;
  costumer: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private service: CustomerService) { }

  ngOnInit() {
  }

  dismiss(): void {
    this.modal.dismiss();
    this.router.navigate(['/']);
  }

  register(f: NgForm) {
    this.service.updateCustomer(f.value as Customer).subscribe((result) => {
      Swal.fire({
        type: 'success',
        title: 'Success',
        text: 'Custumer Updated!',
      }).then((val) => {
        if (val.value) {
          this.dismiss();
        }
      });
    });
  }

  deleteCustomer(customer: Customer): void {
    Swal.fire({
      type: 'question',
      title: 'You shure?',
      text: 'Are you sure to delete the customer?',
      showCancelButton: true,
    }).then((val) => {
      if (val.value)  {
        this.service.deleteCustomer(customer.id).subscribe((deletedCustomer: Customer) => {
          this.dismiss();
        });
      } else {
        Swal.close();
      }
    });
  }

  checkEmail(email: string): boolean {
    let patt = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return patt.test(email);
  }

}
