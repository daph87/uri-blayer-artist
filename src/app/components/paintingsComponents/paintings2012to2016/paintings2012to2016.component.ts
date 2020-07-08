import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-paintings2012to2016',
  templateUrl: './paintings2012to2016.component.html',
  styleUrls: ['./paintings2012to2016.component.scss']
})
export class Paintings2012to2016Component implements OnInit {

  public paintings: Image[]=[];


  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2012-2016.json').then(data => data.json())
    .then(paintings => {
      this.paintings = paintings;

    });
  }

}
