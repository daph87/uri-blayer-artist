import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-paintings2002to2011',
  templateUrl: './paintings2002to2011.component.html',
  styleUrls: ['./paintings2002to2011.component.scss']
})
export class Paintings2002to2011Component implements OnInit {

  public paintings2003: Image[]=[];


  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2003-2011.json').then(data => data.json())
    .then(paintings => {
      this.paintings2003 = paintings;

    });
  }

}
