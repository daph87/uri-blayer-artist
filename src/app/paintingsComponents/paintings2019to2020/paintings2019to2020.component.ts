import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { openModal, closeModal, previousImage, nextImage, onKeyUp } from 'src/app/global';

@Component({
  selector: 'app-paintings2019to2020',
  templateUrl: './paintings2019to2020.component.html',
  styleUrls: ['./paintings2019to2020.component.scss'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class Paintings2019to2020Component implements OnInit {

  public paintings: [];
  public index: number;
  public maxLength : number;
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
    // get the paintings
    fetch('assets/json/artworks-2019-2020.json').then(data => data.json())
    .then(paintings => {
      this.paintings = paintings 
    });
  }

}
