import { Injectable } from '@angular/core';
import QueryParams from "../types/QueryParams";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private queryData!: QueryParams;
  constructor() { }

  public getQueryData(): QueryParams {
    return {...this.queryData};
  }

  public setQueryData(params: QueryParams): void {
    this.queryData = {
      ...this.queryData,
      ...params
    }
  }
}
