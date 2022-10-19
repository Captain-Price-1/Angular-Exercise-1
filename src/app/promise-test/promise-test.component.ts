import { Component, OnInit } from '@angular/core';
import { PromisedemoService } from '../promisedemo.service';
@Component({
  selector: 'app-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.css'],
})
export class PromiseTestComponent implements OnInit {
  constructor(private promiseDemoService: PromisedemoService) {
    this.fetch();
  }
  users: any = [];

  ngOnInit(): void {}
  fetch() {
    this.promiseDemoService.fetchData().then((data) => {
      console.log(data);
      this.users = data;
      this.users = this.users.slice(0, 10);
    });
  }
}
