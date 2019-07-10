import {Component, Input, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Customer} from '../../../interfaces/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.css']
})
export class CustomersNewComponent implements OnInit {

  @Input() modal: NgbModalRef;
  @Input() customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private service: CustomerService) {
  }

  ngOnInit() {
    this.customer = new Customer();
  }

  dismiss(): void {
    this.modal.dismiss();
    this.router.navigate(['/']);
  }

  register(f: NgForm) {
    this.service.createCustomer(f.value as Customer).subscribe((newCustomer: Customer) => {
      Swal.fire({
        type: 'success',
        title: 'Success',
        text: 'Custumer Created!',
      }).then((val) => {
        if (val.value) {
          this.dismiss();
        }
      });
    });
  }

  checkEmail(email: string): boolean {
    let patt = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return patt.test(email);
  }
}
