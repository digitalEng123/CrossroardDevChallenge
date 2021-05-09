import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

// Ref Link #1: https://stackoverflow.com/questions/50606752/angular-using-the-equivalent-of-requestoptions-of-http-with-httpclient

@Injectable()
export class TitleService {

  constructor(private _http: HttpClient) { }

  /*

  get(url: string): Observable<any> {

    //let response = this._http.get<any>(url);

    //response.pipe(map(data => {
    //    var dogs = this.keyValue.transform(data.message)
    //    console.log(dogs)
    //  }))
    //  .subscribe();

    return this._http.get(url)
      .map((response: Response) => <any>response.json())
      // .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);

    //return this._http.get(url)
    //  .pipe({
    //    next(position) {
    //      console.log('Current Position: ', position);
    //    },
    //    error(msg) {
    //      console.log('Error Getting Location: ', msg);
    //    }
    //  })
  }

  post(url: string, model: any): Observable<any> {

    let body = JSON.stringify(model);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let options = new HttpParams().append({ headers: headers });

    let options = {
      headers: headers,
      params: new HttpParams(),
      reportProgress: false,
      responseType: undefined,
      withCredentials: false
    }

    return this._http.post(url, body, options)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  put(url: string, id: number, model: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(url + id, body, options)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  delete(url: string, id: number): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(url + id, options)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


  */

}
