import { Component , Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PaymentDetailService} from '../paymentdetail.service';
import {Router} from '@angular/router';
import {CompleteModalComponent} from './complete-modal.component';
import {ErrorModalComponent} from './error-modal.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {

  @Input() payment;

  constructor(
    public activeModal: NgbActiveModal,
    private paymentDetailService: PaymentDetailService,
    private router: Router,
    private modalService: NgbModal) {}

  callPaymentDetailService() {

    console.log('start callPaymentDetailService');
    console.log(this.payment);

    this.paymentDetailService.callPaymentDetailAPI(this.payment)
      .then( response => {
            this.activeModal.close(0);
      })
      .catch(error => {
        this.activeModal.close(1);
      });

    console.log('end callPaymentDetailService');
  }
}
