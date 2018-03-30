import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Payitem } from '../payitem';
import { Payment } from '../payment';
import { PayitemlistService } from '../payitemlist.service';
import { PaymentDetailService } from '../paymentdetail.service';
import { ConfirmModalComponent } from './confirm-modal.component';

import { Router } from '@angular/router';
// カレンダー用のモジュールをインポートする
import * as $ from 'jquery';
import 'bootstrap-datepicker';
import '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CompleteModalComponent} from './complete-modal.component';
import {ErrorModalComponent} from './error-modal.component';

@Component({
  selector: 'app-paymentdetail',
  templateUrl: './paymentdetail.component.html',
  styleUrls: ['./paymentdetail.component.css']
})
export class PaymentdetailComponent implements OnInit {

  // 品目
  payitems: Payitem[];
  // カレントの品目
  curPayitem: any;
  // エラーメッセージ
  error: boolean;

  today = new Date();
  yymmdd = this.today.getFullYear()
    + '/' + (('0' + (this.today.getMonth() + 1)).slice(-2))
    + '/' + (('0' + (this.today.getDate())).slice(-2));


  paydate = new FormControl(this.yymmdd, [
    Validators.required,
    Validators.pattern('\\d{4}/(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])')
  ]);

  unitPrice = new FormControl('',[
    Validators.required,
    Validators.maxLength(6),
    Validators.pattern('^[1-9]\\d{0,5}')
  ]);
  quantity = new FormControl(1,[
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern('^[1-9]\\d{0,3}')
  ]);

  amount = new FormControl('単価を入力してください。',[
    Validators.maxLength(10),
    Validators.pattern('^[1-9]\\d{0,9}')
  ]);
  paymentdetailForm = this.builder.group({
    payDate: this.paydate,
    unitPrice: this.unitPrice,
    quantity: this.quantity,
    amount: this.amount
  });


  constructor(private builder: FormBuilder,
              private payitemlistService: PayitemlistService,
              private paymentDetailService: PaymentDetailService,
              private router: Router,
              private modalService: NgbModal) { }

  // 初期処理
  ngOnInit() {

    // カレンダーを設定する
    this.setUpPayDate();
    // 品目を取得する
    this.getItems();

    // 初期設定
    this.error = false;

  }

  setUpPayDate() {
    $('#datepicker .date').datepicker({
      format: 'yyyy/mm/dd'
    });
  }
  // 品目を取得する
  getItems() {
    this.payitemlistService.getItems()
      .then(getItems => this.payitems = getItems)
      .then(getItems => this.setCurrentItem(this.payitems[0].itemId));
  }

  // 選択した品目をカレントに設定する
  setCurrentItem(itemId: any): void {
    console.log(itemId);
    this.curPayitem = this.payitems.filter(value => value.itemId === parseInt(itemId));
    console.log(this.curPayitem);
  }

  setPaydate(paydate: any) {
    console.log('statrt setPaydate');
    console.log(paydate);
    this.paydate.setValue(paydate);
  }

  calAmount() {
    if (this.unitPrice.invalid || this.quantity.invalid) {
      this.amount.setValue('計算不可');
    } else {
      this.amount.setValue(this.unitPrice.value * this.quantity.value);
    }
  }

  open() {
    console.log('start openCofirmModal');

    let payment: Payment = new Payment();
    payment.payDate = this.paydate.value;
    payment.itemId =  this.curPayitem[0].itemId;
    payment.name =  this.curPayitem[0].name;
    payment.unitPrice = this.unitPrice.value;
    payment.quantity = this.quantity.value;
    payment.amount = this.amount.value;

    console.log(payment);

    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.payment = payment;
    modalRef.result.then(
      result => {
        if (result === 1) {
          const modalError = this.modalService.open(ErrorModalComponent);
          modalError.result.then(resultComplete => {
          });
        } else {
          const modalComplete = this.modalService.open(CompleteModalComponent);
          modalComplete.result.then(resultComplete => {
            this.router.navigate(['/paymentlist']);
          })
            .catch(resultComplete => {
              this.router.navigate(['/paymentlist']);
            });
        }
      }
    );
  }
}
