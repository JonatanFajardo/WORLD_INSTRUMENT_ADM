import { ReturnStatement } from '@angular/compiler';
import { map, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
  })
export class GeneralService {
  private ApiUrl: string = 'https://localhost:44301/';
  constructor(private _http: HttpClient) {}
  Get(url: string) {
    return this._http.get<any>(this.ApiUrl + url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  Post(url: string, model: any) {
    return this._http.post<any>(this.ApiUrl + url, model).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  Put(url: string, model: any) {
    return this._http.put<any>(this.ApiUrl + url, model).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Delete(url:string, model:any){
  //     return this._http
  // }
}
