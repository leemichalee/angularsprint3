import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  // @Input() fund: Fund = {}
  fund:Fund = {}
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

  name: any = '';
  ticker: any = '';
  assetclass: any = '';
  expenseratio: any = 0;
  price: any = 0;
  change1: any = 0;
  change2: any = 0;
  secyield: any = 0;
  ytd: any = 0;
  yr1: any = 0;
  yr5: any = 0;
  yr10: any = 0;
  yrinception: any = 0;

  constructor(private route:ActivatedRoute, private fundService: FundService,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const myid = params['id'];
      this.fundService.getFund(myid).subscribe(payload =>{
        this.fund = payload
        console.log(typeof(this.fund.name))
        this.name = this.fund.name
        this.ticker = this.fund.ticker
        this.assetclass = this.fund.assetclass
        this.expenseratio = this.fund.expenseratio
        this.price = this.fund.price
        this.change1 = this.fund.change1
        this.change2 = this.fund.change2
        this.secyield = this.fund.secyield
        this.ytd = this.fund.ytd
        this.yr1 = this.fund.yr1
        this.yr5 = this.fund.yr5
        this.yr10 = this.fund.yr10
        this.yrinception = this.fund.yrinception
      })
    })
  }

  putFund(id: any){
    this.fund = { 
      name: this.name,
      ticker: this.ticker,
      assetclass: this.assetclass,
      expenseratio: this.expenseratio,
      price: this.price,
      change1: this.change1,
      change2: this.change2,
      secyield: this.secyield,
      ytd: this.ytd,
      yr1: this.yr1,
      yr5: this.yr5,
      yr10: this.yr10,
      yrinception: this.yrinception
     };
    this.http.put<any>(`http://localhost:8082/api/customfunds/${id}`, this.fund)
        .subscribe(data =>{
          if(data){
            window.location.reload();
          }
        })
  }

  deleteFund(id: any){
    this.fundService.deleteFund(id)
    .subscribe(data =>{
          if(data){
            this.router.navigateByUrl("/funds");
          }
    })
    alert(this.name + ' has been deleted');
  }
}
