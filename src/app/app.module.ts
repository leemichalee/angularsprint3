import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditfundComponent } from './editfund/editfund.component'

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    FundComponent,
    EditfundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
