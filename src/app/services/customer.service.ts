import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { Customer } from '../interfaces/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private base = 'https://tidy-api-test.herokuapp.com/api';
  private apiVersion = 'v1';
  private apiReturnFormat = 'json';

  constructor(private http: HttpClient) {  }

  // Return all customers
  getCostumers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getApiPath('customer_data'));
  }

  // Create a new customer
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.getApiPath('customer_data'), customer);
  }

  // Delete a customer
  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.getApiPath('customer_data', id));
  }

  // Update a customer
  updateCustomer(customer): Observable<boolean> {
    return this.http.put<boolean>(this.getApiPath('customer_data', customer.id), customer);
  }

  // Private methods to help to use api
  private setApiVersion(version: string): string {
    return this.apiVersion = version;
  }

  private getApiPath(...resources: any): string {
    let apiPath = this.base + '/' + this.apiVersion;
    resources.forEach((item, index) => {
      apiPath += `/${item}`;
    });
    return apiPath + '.' +this.apiReturnFormat;
  }
}
