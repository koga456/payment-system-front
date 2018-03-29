import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  //コンストラクタでルーターを定義しておく
  constructor(private router: Router) { }

  // 初期処理
  ngOnInit() {
    // 品目を取得する
    this.router.navigate(["/paymentlist"]);
  }

}
