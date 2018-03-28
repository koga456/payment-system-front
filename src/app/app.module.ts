import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    RouterModule.forRoot(
      [{ path: 'paymentlist', component: PaymentlistComponent }, { path: 'paymentdetail', component: PaymentdetailComponent }]
    )
  ],
  providers: [PayitemlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
