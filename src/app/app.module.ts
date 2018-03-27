import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgbModuleをimportする
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PaymentlistComponent
  ],
  imports: [
    // Rootモジュールに対してNgbModule.forRoot()をimport
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(
      [{ path: 'paymentlist', component: PaymentlistComponent },]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
