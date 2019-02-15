import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService implements IAppService {

  constructor(private http: HttpClient) { }

  public insertDummyData(data:number): Promise<void> {
    return this.http.get('http://localhost:5001/api/sisense/insertDummyData?data='+data)
        .toPromise()
        .catch(e => this.handleError(e));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}

export interface IAppService {
    insertDummyData(data: number): Promise<void>;
}
