import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  searchPayDate = new FormControl();
  searchSubjectName = new FormControl();

  paymentlistForm = this.builder.group({
    payDate: this.searchPayDate,
    subjectName: this.searchSubjectName,
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

  show() {

  }

}
