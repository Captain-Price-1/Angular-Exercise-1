import { Component, OnInit } from '@angular/core';
import { ObservabledemoService } from '../observabledemo.service';
@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css'],
})
export class ObservableTestComponent implements OnInit {
  users: any = [];
  constructor(private observableDemo: ObservabledemoService) {
    this.fetch();
  }
  fetch() {
    this.observableDemo.fetchData().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.users = this.users.slice(0, 10);
    });
  }

  ngOnInit(): void {}
}
