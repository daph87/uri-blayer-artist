import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { openModal, closeModal, previousImage, nextImage } from 'src/app/global';

@Component({
  selector: 'app-early-work',
  templateUrl: './early-work.component.html',
  styleUrls: ['./early-work.component.scss']
})
export class EarlyWorkComponent implements OnInit {
  public index: number;
  public maxLength: number;
  public paintings: any = [];
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;
  // modal states
  public openModal = openModal;
  public closeModal = closeModal;
  public previousImage = previousImage;
  public nextImage = nextImage;

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-early-work.json').then(data => data.json())
      .then(paintings => {
        this.paintings = paintings;
      })

  }
}
