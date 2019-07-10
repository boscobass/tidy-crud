import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Customer} from '../../../interfaces/customer';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {

  @Input() modal: NgbModalRef;
  @Input() costumer: Customer;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  dismiss(): void {
    this.modal.dismiss();
    this.router.navigate(['/']);
  }


}
