import { Injectable } from '@angular/core';
import { Payitem } from './payitem';
import { Payment } from './payment';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PaymentDetailService {
  private getUrl = 'http://localhost:8080/api/paymentDetail/';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.log('エラー');
    console.log(error);
    return Promise.reject(error.messge || error);
  }

  public callPaymentDetailAPI(payment: Payment): Promise<Payitem[]> {
    console.log('start callPaymentDetailAPI');
    return this.http.post(this.getUrl, payment,
      { headers: new Headers( { 'Content-Type': 'application/json' })}).toPromise()
      .then(response => response)
      .catch(this.handleError);
  }
}
