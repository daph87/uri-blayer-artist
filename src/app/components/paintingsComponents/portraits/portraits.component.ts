import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss']
})
export class PortraitsComponent implements OnInit {
  public portraits: Image[]=[];


  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/portraits.json').then(data => data.json())
    .then(paintings => {
      this.portraits = paintings;

    });
  }
}
