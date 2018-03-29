import { Injectable } from '@angular/core';
import { Paymentdisp } from './Paymentdisp';

import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaymentlistService {
  // WebAPIのURI
  private getUrl = "http://localhost:8080/api/paymentList/";

  // コンストラクタ
  constructor(private http: Http) { }

  // 支払一覧データの取得
  getPayments(searchPayDate: string, itemId: number): Promise<Paymentdisp[]> {
    // 検索条件のJSONを作成する
    const body = { payDate: searchPayDate, itemId: itemId };
    // 検索する
    return this.http.post(this.getUrl, body, { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise()
      .then(response => response.json().paymentInfoList as Paymentdisp[])
      .catch(this.handleError);
  }

  // エラー処理
  private handleError(error: any): Promise<any> {
    console.log("エラー");
    console.log(error);
    return Promise.reject(error.messge || error);
  }

}
