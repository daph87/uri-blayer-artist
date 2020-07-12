import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { openModal, closeModal, previousImage, nextImage } from 'src/app/global';
import { DOCUMENT } from '@angular/common';


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

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-early-work.json').then(data => data.json())
      .then(paintings => {
        this.paintings = paintings;

      })

      // this.document.onkeydown (()=>{

      
  }



}
