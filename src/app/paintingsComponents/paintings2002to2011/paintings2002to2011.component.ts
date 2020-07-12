import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/models/image';
import { openModal, closeModal, previousImage, nextImage,onKeyUp } from 'src/app/global';

@Component({
  selector: 'app-paintings2002to2011',
  templateUrl: './paintings2002to2011.component.html',
  styleUrls: ['./paintings2002to2011.component.scss'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class Paintings2002to2011Component implements OnInit {

  public paintings: any[];
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
    // get the paintings

    
    fetch('assets/json/artworks-2003-2011.json').then(data => data.json())
      .then(paintings => {

        this.paintings = paintings 
        
      });
  }
}
