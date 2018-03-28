import { Component, OnInit } from '@angular/core';
// サービスを追加する
import { PayitemlistService } from '../payitemlist.service';
import { Payitem } from '../payitem';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  constructor(private payitemlistService: PayitemlistService) { }

  // 品目
  payitems: Payitem[];
  curPayitem: any;

  // 初期処理
  ngOnInit() {
    // 品目を取得する
    this.getItems();
  }

  // 品目を取得する
  getItems() {
    this.payitemlistService.getItems()
      .then(getItems => this.payitems = getItems);
  }

  // 選択した品目をカレントに設定する
  setCurrentItem(itemId: any): void {
    console.log(itemId);
    this.curPayitem = this.payitems.filter(value => value.itemId === parseInt(itemId));
    console.log(this.curPayitem);
  }
}
