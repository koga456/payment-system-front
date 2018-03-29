import { Component, OnInit } from '@angular/core';
// カレンダー用のモジュールをインポートする
import * as $ from 'jquery';
import 'bootstrap-datepicker';

// クラスを追加する
import { Payitem } from '../payitem';
import { Payment } from '../payment';
// サービスを追加する
import { PayitemlistService } from '../payitemlist.service';
import { PaymentlistService } from '../paymentlist.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})

export class PaymentlistComponent implements OnInit {
  // コンストラクタ
  constructor(
    private payitemlistService: PayitemlistService,
    private paymentlistService: PaymentlistService
  ) { }

  // 支払日
  searchPayDate: string;
  // 品目
  payitems: Payitem[];
  // 品目(カレント)
  curPayitem: any;

  // 支払(一覧表示用)
  payments: Payment[];
  // = [
  //   {
  //     id: 1, payDate: '2018/03/01', itemId: 1,
  //     unitPrice: 1,
  //     quantity: 1,
  //     amount: 1,
  //     name: "ハローワールド",
  //   }];

  // 初期処理
  ngOnInit() {
    // カレンダーを設定する
    this.setUpPayDate();
    // 品目を取得する
    this.getItems();
  }

  // 支払日の初期化
  setUpPayDate() {
    this.searchPayDate = this.formatDate(new Date());
    $('#datepicker .date').datepicker({
      format: 'yyyy/mm/dd'
    });
  }
  // 品目を初期化
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
  search() {
    // 検索条件を設定する
    let payDate;
    let itemId;
    if (this.searchPayDate != null && this.searchPayDate != "") {
      payDate = this.searchPayDate;
    }
    if (this.curPayitem != null) {
      itemId = this.curPayitem[0].itemId;
    }
    // 検索する
    this.paymentlistService.getPayments(payDate, itemId)
      .then(getPayments => this.payments = getPayments);
  }

  private formatDate(date) {
    let format = 'YYYY/MM/DD';
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    if (format.match(/S/g)) {
      const milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
      const length = format.match(/S/g).length;
      for (let i = 0; i < length; i++) {
        format = format.replace(/S/, milliSeconds.substring(i, i + 1));
      }
    }
    return format;
  }
}
