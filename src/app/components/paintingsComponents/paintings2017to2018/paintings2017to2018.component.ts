import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-paintings2017to2018',
  templateUrl: './paintings2017to2018.component.html',
  styleUrls: ['./paintings2017to2018.component.scss']
})
export class Paintings2017to2018Component implements OnInit {

  public paintings2017: Image[]=[];


  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2017-2018.json').then(data => data.json())
    .then(paintings => {
      this.paintings2017 = paintings;

    });
  }
}
