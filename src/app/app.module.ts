import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AsyncTestComponent } from './async-test/async-test.component';
import { PromiseTestComponent } from './promise-test/promise-test.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';

@NgModule({
  declarations: [AppComponent, AsyncTestComponent, PromiseTestComponent, ObservableTestComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
