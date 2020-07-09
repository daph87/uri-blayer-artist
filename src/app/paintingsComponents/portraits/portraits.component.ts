import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/models/image';
import { openModal, closeModal, previousImage, nextImage } from 'src/app/global';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss']
})
export class PortraitsComponent implements OnInit {
  public paintings: any[]=[];
  public index: number;
  public maxLength : number;
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
    fetch('assets/json/portraits.json').then(data => data.json())
    .then(paintings => {
      this.paintings = paintings;
    });
  }

  // public openModal(id) {

  //   this.paintings.map((painting) => {
  //     if (painting.id === id) {
  //       this.painting = painting;
  //       this.index = this.paintings.indexOf(painting)
  //       this.maxLength = this.paintings.length - 1;
  //     }
  //   })
  //   this.artworkModal.nativeElement.style.display = 'block';

  // }

  // public closeModal(): void {
  //   this.artworkModal.nativeElement.style.display = 'none';
  // }


  // public previousImage(): void {
  //   if (this.index == 0) this.index = this.portraits.length;
  //   this.painting = this.portraits[this.index - 1];
  //   this.index--;
  // }

  // public nextImage(): void {
  //   if (this.index + 1 > this.maxLength) this.index = -1;
  //   this.painting = this.portraits[this.index + 1];
  //   this.index++;
  // }
}
