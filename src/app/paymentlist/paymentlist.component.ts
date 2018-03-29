import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// サービスを追加する
import { PayitemlistService } from '../payitemlist.service';
import { Payitem } from '../payitem';
import * as $ from 'jquery';
import 'bootstrap-datepicker';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  constructor(private payitemlistService: PayitemlistService) { }

  // 品目
  payitems: Payitem[];
  // カレントの品目
  curPayitem: any;

  searchPayDate: string;

  // 初期処理
  ngOnInit() {
    // カレンダーを設定する
    this.setUpPayDate();
    // 品目を取得する
    this.getItems();
  }

  setUpPayDate() {
    this.searchPayDate = this.formatDate(new Date());
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
    this.curPayitem = this.payitems.filter(value => value.itemId === parseInt(itemId));
    console.log(this.curPayitem);
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
