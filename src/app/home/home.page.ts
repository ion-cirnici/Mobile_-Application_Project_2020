import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
NewsStories:any
  constructor(private newsService:NewsService) {


  }

ngOnInit() {
  this.newsService.GetLatestNewsStories().subscribe(
    (data)=>{
      this.NewsStories = data.articles;
    }
  );
}
public textColor: any;


}
