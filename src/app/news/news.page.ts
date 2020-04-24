import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
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

}
