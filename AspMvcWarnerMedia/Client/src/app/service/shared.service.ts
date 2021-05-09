import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:62615/api";
  readonly ImagesUrl = "http://localhost:62615/images";

  constructor(private http: HttpClient) { }

  getTitleNames(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/title/getAllTitleNames');
  }

  getTitleList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl +'/title/gettitles');
  }

  addTitle(val:any) {
    return this.http.post(this.APIUrl + '/title/createtitle', val);
  }

  putTitle(val: any) {
    return this.http.put(this.APIUrl + '/title/updatetitle', val);
  }

  deleteTitle(val: any) {
    return this.http.delete(this.APIUrl + '/title/deletetitle?titleId=' + val);
  }

  getAllTitle_Awards(val: any) {
    return this.http.get<any>(this.APIUrl + '/award/getAllByTitle?titleId=' + val);
  }

  getAllTitle_OtherNames(val: any) {
    return this.http.get<any>(this.APIUrl + '/otherName/getAllByTitle?titleId=' + val);
  }

  getAllTitle_StoryLines(val: any) {
    return this.http.get<any>(this.APIUrl + '/storyLine/getAllByTitle?titleId=' + val);
  }

  getAllTitle_Genre(val: any) {
    return this.http.get<any>(this.APIUrl + '/genre/getAllByTitle?titleId=' + val);
  }

  getAllTitle_Participant(val: any) {
    return this.http.get<any>(this.APIUrl + '/participant/getAllByTitle?titleId=' + val);
  }
}
