import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-recent2003',
  templateUrl: './recent2003.component.html',
  styleUrls: ['./recent2003.component.scss']
})
export class Recent2003Component implements OnInit {
  public paintings: Article[];

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/field.json').then(data => data.json())
    .then(paintings => this.paintings = paintings);
  }

}
