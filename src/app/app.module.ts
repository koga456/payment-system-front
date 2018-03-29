import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Httpをimportする
import { HttpModule } from '@angular/http';
// NgbModuleをimportする
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// コンポーネントを追加する
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';

// サービスを追加する
import { PayitemlistService } from './payitemlist.service';
import { PaymentDetailService } from './paymentdetail.service';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PaymentlistComponent,
    PaymentdetailComponent
  ],
  imports: [
    // Rootモジュールに対してNgbModule.forRoot()をimport
    NgbModule.forRoot(),
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      [{ path: 'paymentlist', component: PaymentlistComponent }, { path: 'paymentdetail', component: PaymentdetailComponent }]
    )
  ],
  providers: [PayitemlistService, PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
