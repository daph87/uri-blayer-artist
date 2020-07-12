import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { openModal, closeModal, previousImage, nextImage, onKeyUp } from 'src/app/global';

@Component({
  selector: 'app-paintings2017to2018',
  templateUrl: './paintings2017to2018.component.html',
  styleUrls: ['./paintings2017to2018.component.scss'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class Paintings2017to2018Component implements OnInit {

  public paintings: [];
  public index: number;
  public maxLength : number;
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;
  // modal states
  public openModal = openModal;
  public closeModal = closeModal;
  public onKeyUp = onKeyUp;
  public previousImage = previousImage;
  public nextImage = nextImage;
  
  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2017-2018.json').then(data => data.json())
    .then(paintings => {
      this.paintings = paintings 
     });
  }
}
