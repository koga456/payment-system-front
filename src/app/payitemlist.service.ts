import { Injectable } from '@angular/core';
import { Payitem } from './payitem';

@Injectable()
export class PayitemlistService {
  private getUrl = "";
  // getItems(): Promise<Payitem[]> {
  //   return this.http.get(this.getUrl)
  // }
  getItems(): Payitem[] {
    return null;
  }
}
