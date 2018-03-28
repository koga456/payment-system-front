import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Httpをimportする
import { HttpModule } from '@angular/http';
// NgbModuleをimportする
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { RouterModule } from '@angular/router';

// サービスを追加する
import { PayitemlistService } from './payitemlist.service';


@NgModule({
  declarations: [
    AppComponent,
    PaymentlistComponent
  ],
  imports: [
    // Rootモジュールに対してNgbModule.forRoot()をimport
    NgbModule.forRoot(),
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      [{ path: 'paymentlist', component: PaymentlistComponent },]
    )
  ],
  providers: [PayitemlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
