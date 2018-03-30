import { Component } from '@angular/core';
import { NgbActiveModal , NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ErrorModalComponent {

  constructor(
    public activeModal: NgbActiveModal) {}
}
