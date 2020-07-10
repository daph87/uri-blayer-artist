import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-early-work',
  templateUrl: './early-work.component.html',
  styleUrls: ['./early-work.component.scss']
})
export class EarlyWorkComponent implements OnInit {

   public paintings97: Image[] = [];

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-early-work.json').then(data => data.json())
      .then(paintings => {
        this.paintings97 = paintings;
      
      })
  }
}
