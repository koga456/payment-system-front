import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentdetail',
  templateUrl: './paymentdetail.component.html',
  styleUrls: ['./paymentdetail.component.css']
})
export class PaymentdetailComponent implements OnInit {

  today = new Date();
  yymmdd = this.today.getFullYear()
    + '/' + (('0' + (this.today.getMonth() + 1)).slice(-2))
    + '/' + (('0' + (this.today.getDate())).slice(-2));

  paydate = new FormControl(this.yymmdd, [
    Validators.required,
    Validators.pattern('\\d{4}/(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])')
  ]);
  subjectName = new FormControl();
  unitPrice = new FormControl(1,[
    Validators.required,
    Validators.maxLength(6),
    Validators.pattern('^[1-9]\\d{0,5}')
  ]);
  quantity = new FormControl();

  paymentdetailForm = this.builder.group({
    payDate: this.paydate,
    subjectName: this.subjectName,
    unitPrice: this.unitPrice,
    quantity: this.quantity
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

  show() {

  }

}
