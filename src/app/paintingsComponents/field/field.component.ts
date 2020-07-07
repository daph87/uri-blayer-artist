import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  public images: Image[];

  constructor() { }

  ngOnInit(): void {
    // get the images from the json file
    fetch('assets/json/field.json').then(data => data.json())
    .then(images => this.images = images);

  }

}
