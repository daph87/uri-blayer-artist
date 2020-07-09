import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss']
})
export class PortraitsComponent implements OnInit {
  public portraits: any[]=[];
  public index: number;
  public maxLength : number;
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/portraits.json').then(data => data.json())
    .then(paintings => {
      this.portraits = paintings;

    });
  }

  public openModal(id) {

    this.portraits.map((painting) => {
      if (painting.id === id) {
        this.painting = painting;
        this.index = this.portraits.indexOf(painting)
        this.maxLength = this.portraits.length - 1;
      }
    })
    this.artworkModal.nativeElement.style.display = 'block';

  }

  public closeModal(): void {
    this.artworkModal.nativeElement.style.display = 'none';
  }


  public previousImage(): void {
    if (this.index == 0) this.index = this.portraits.length;
    this.painting = this.portraits[this.index - 1];
    this.index--;
  }

  public nextImage(): void {
    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.portraits[this.index + 1];
    this.index++;
  }
}
