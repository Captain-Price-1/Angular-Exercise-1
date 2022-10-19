import { Component, OnInit } from '@angular/core';
import { AsyncdemoService } from '../asyncdemo.service';
import { lastValueFrom } from 'rxjs';
interface userData {
  data: string[];
}
@Component({
  selector: 'app-async-test',
  templateUrl: './async-test.component.html',
  styleUrls: ['./async-test.component.css'],
})
export class AsyncTestComponent implements OnInit {
  info: any;
  constructor(private asyncDemoService: AsyncdemoService) {
    this.fetch();
  }
  ngOnInit(): void {}
  async fetch() {
    const res = await this.asyncDemoService.getInfo();
    this.info = await lastValueFrom(res);
    console.log(this.info);
  }
}
