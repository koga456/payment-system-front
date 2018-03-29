import { Injectable } from '@angular/core';
import { Payitem } from './payitem';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PayitemlistService {
  private getUrl = "http://localhost:8080/api/getItemList/";

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.log("エラー");
    console.log(error);
    return Promise.reject(error.messge || error);
  }

  getItems(): Promise<Payitem[]> {
    const body = {};
    return this.http.post(this.getUrl, body).toPromise()
      .then(response => response.json().itemlist as Payitem[])
      .catch(this.handleError);
  }
}
