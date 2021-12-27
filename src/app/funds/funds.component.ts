import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { HttpClient } from "@angular/common/http";
import { Routes, Router} from 'node_modules/@angular/router';



@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  constructor(private fundService: FundService, private http: HttpClient, public router: Router) { }

  funds:Fund[] = [];
  postId: any

  // bookTitle: string = '';
  // subtitle: string = '';
  // author: string = '';
  // published: string = '';
  // publisher: string = '';
  // pages: number = 0;
  // description: string = '';
  // website: string = '';
  // price: number = 0;

  name: string = '';
  ticker: string = '';
  assetclass: string= '';
  expenseratio: number = 0;
  price: number = 0;
  change1: number = 0;
  change2: number = 0;
  secyield: number = 0;
  ytd: number = 0;
  yr1: number = 0;
  yr5: number = 0;
  yr10: number = 0;
  yrinception: number = 0;


  ngOnInit(): void {
    this.fundService.getFunds().subscribe(payload =>{
      console.log(payload)
      this.funds = payload;
      
    })
  }

  // deleteFund(id: any){
  //   this.fundService.de
  //   this.http.delete(`http://localhost:8082/api/customfunds/${id}`)
  //   .subscribe()
  // }

  postFund(){
    this.http.post<any>('http://localhost:8082/api/customfunds', {
        name: this.name,
        ticker: this.ticker,
        assetclass: this.assetclass,
        expenseratio: this.expenseratio,
        price: this.price,
        change1: this.change1,
        change2: this.change2,
        secyield: this.secyield,
        ytd: this.price,
        yr1: this.yr1,
        yr5: this.yr5,
        yr10: this.yr10,
        yrinception: this.yrinception
    })
    .subscribe(data =>{
      if(data){
        window.location.reload();
      }
    })
}

}
