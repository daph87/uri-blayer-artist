import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/models/image';
import { openModal, closeModal, previousImage, nextImage, onKeyUp } from 'src/app/global';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class FieldComponent implements OnInit {
  public paintings:[];
  public index: number;
  public maxLength: number;
  public painting: any = {};

  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;
  // modal states

  public openModal = openModal;
  public closeModal = closeModal;
  public previousImage = previousImage;
  public nextImage = nextImage;
  public onKeyUp = onKeyUp;

  constructor() { }

  ngOnInit(): void {
    // get the images from the json file
    fetch('assets/json/field.json').then(data => data.json())
    .then(images => this.paintings = images);

  }

}
