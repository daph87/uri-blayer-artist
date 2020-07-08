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
        // paintings.map((painting) => {
        //   if (painting.year === "1997" || painting.year === "1998"|| painting.year === "1999"|| painting.year === "2000"|| painting.year === "2001"|| painting.year === "2002" || painting.src === "lihue-sugarmill.jpg" || painting.src === "green-house.jpg") {
        //     this.paintings97.push(painting);
        //     console.log(this.paintings97)
        //   }

        // })
      })
  }
}
