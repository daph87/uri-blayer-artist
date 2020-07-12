import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];
  // modal
  public modalClass: string = 'none';
  public painting: string;
  // 
  public images: string[];
  public index: number;

  constructor() { }

  ngOnInit(): void {
    // get the articles
    fetch('assets/json/articles.json').then(data => data.json())
      .then(articles => this.articles = articles);
  }

  public definePainting(src, images): void {
    this.painting = src;
    console.log('paintings: ', images);
    if (images.length > 1) {
      this.images = images;
      this.index = images.findIndex(str => str === src ? true : false);
      console.log('index: ', this.index);
    } else {
      this.images = this.index = undefined;
    }
    this.modalClass = 'block';
  }
  public prev(): void {
    this.index--;
    if (this.index < 0) this.index = this.images.length - 1;
    this.painting = this.images[this.index];
  }

  public next(): void {
    this.index++;
    if (this.index >= this.images.length) this.index = 0;
    this.painting = this.images[this.index];
  }

  public close(): void {
    this.modalClass = 'none';
    this.images = this.index = undefined;
  }

}
