import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, pluck } from 'rxjs';
interface userData {
  data: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any;
}
