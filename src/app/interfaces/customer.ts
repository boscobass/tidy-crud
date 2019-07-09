export interface Customer {
  readonly id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
