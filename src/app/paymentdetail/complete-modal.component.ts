import { Component } from '@angular/core';
import { NgbActiveModal , NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-complete',
  templateUrl: './complete-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class CompleteModalComponent {

  constructor(
    public activeModal: NgbActiveModal) {}
}
