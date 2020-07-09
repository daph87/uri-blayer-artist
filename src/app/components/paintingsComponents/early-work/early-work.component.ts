import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-early-work',
  templateUrl: './early-work.component.html',
  styleUrls: ['./early-work.component.scss']
})
export class EarlyWorkComponent implements OnInit {
  public index: number;
  public maxLength : number;
  public paintings97: any = [];
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-early-work.json').then(data => data.json())
      .then(paintings => {
        this.paintings97 = paintings;

      })
  }

  public openModal(id) {

    this.paintings97.map((painting) => {
      if (painting.id === id) {
        this.painting = painting;
        this.index = this.paintings97.indexOf(painting)
        this.maxLength = this.paintings97.length - 1;
      }
    })
    this.artworkModal.nativeElement.style.display = 'block';

  }

  public closeModal(): void {
    this.artworkModal.nativeElement.style.display = 'none';
  }


  public previousImage(): void {
    if (this.index == 0) this.index = this.paintings97.length;
    this.painting = this.paintings97[this.index - 1];
    this.index--;
  }

  public nextImage(): void {
    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.paintings97[this.index + 1];
    this.index++;
  }
}
