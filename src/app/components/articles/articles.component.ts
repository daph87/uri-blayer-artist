import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];

  constructor() { }

  ngOnInit(): void {
    // get the articles
    fetch('assets/json/articles.json').then(data => data.json())
    .then(articles => this.articles = articles);
  }

}
