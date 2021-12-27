import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';


@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http:HttpClient) { }

  getFunds(): Observable<any> {
    return this.http.get("http://localhost:8082/api/customfunds")
  }

  getFund(id: number): Observable<any> {
    return this.http.get("http://localhost:8082/api/customfunds/"+id)
  }

  updateFund(fund: Fund): Observable<any> {
    return this.http.patch(`http://localhost:8082/api/customfunds/${fund.id}`,fund)
  }

  updateWholeFund(fund: any, id: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8082/api/customfunds/${id}`, fund)
  }

  deleteFund(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/customfunds/${id}`)
  }

}
