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

  // 初期処理
  ngOnInit() {
    // カレンダーを設定する
    this.setUpPayDate();
    // 品目を取得する
    this.getItems();
    // 初期表示は検索条件なしで検索する
    this.search();
  }

  // カレンダーを設定する
  setUpPayDate() {
    $('#datepicker .date').datepicker({
      format: 'yyyy/mm/dd'
    });
  }

  // 品目を取得する
  getItems() {
    this.payitemlistService.getItems()
      .then(getItems => this.payitems = getItems);
  }

  // 選択した品目をカレントに設定する
  setCurrentItem(itemId: any): void {
    console.log(itemId);
    if (itemId == -1) {
      this.curPayitem = [{ itemId: -1, name: '' }];
    } else {
      this.curPayitem = this.payitems.filter(value => value.itemId === parseInt(itemId));
    }
    console.log(this.curPayitem);
  }
  search() {
    // 検索条件を設定する
    let payDate;
    let itemId;
    if (this.searchPayDate != null && this.searchPayDate != "") {
      payDate = this.searchPayDate;
    }
    if (this.curPayitem != null && this.curPayitem[0].itemId != -1) {
      itemId = this.curPayitem[0].itemId;
    }
    // 検索する
    this.paymentlistService.getPayments(payDate, itemId)
      .then(getPayments => this.payments = getPayments);
  }
}
