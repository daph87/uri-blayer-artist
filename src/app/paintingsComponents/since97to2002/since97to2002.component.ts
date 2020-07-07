import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-since97to2002',
  templateUrl: './since97to2002.component.html',
  styleUrls: ['./since97to2002.component.scss']
})
export class Since97to2002Component implements OnInit {
  public paintings: Image[];
  public paintings97: Image[] = [];

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks.json').then(data => data.json())
      .then(paintings => {
        this.paintings = paintings;
        paintings.map((painting) => {
          if (painting.year === "1997") {
            this.paintings97.push(painting);
            console.log(this.paintings97)
          }

        })
      })
  }
}
