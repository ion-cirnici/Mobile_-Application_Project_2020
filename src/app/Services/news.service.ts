import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }


  GetLatestNewsStories():Observable<any>{
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=29e30701c14c42b1877ddcf344b38719');
  }
}
