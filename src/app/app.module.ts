import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// NgbModuleをimportする
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { RouterModule } from '@angular/router';
import {PaymentdetailComponent} from './paymentdetail/paymentdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentlistComponent,
    PaymentdetailComponent
  ],
  imports: [
    // Rootモジュールに対してNgbModule.forRoot()をimport
    NgbModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: 'paymentlist', component: PaymentlistComponent },
        { path: 'paymentdetail', component: PaymentdetailComponent },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
