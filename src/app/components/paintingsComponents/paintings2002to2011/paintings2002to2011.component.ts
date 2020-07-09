import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-paintings2002to2011',
  templateUrl: './paintings2002to2011.component.html',
  styleUrls: ['./paintings2002to2011.component.scss']
})
export class Paintings2002to2011Component implements OnInit {

  public paintings2003: any[]=[];
  public index: number;
  public maxLength : number;
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;


  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2003-2011.json').then(data => data.json())
    .then(paintings => {
      this.paintings2003 = paintings;

    });
  }


  public openModal(id) {

    this.paintings2003.map((painting) => {
      if (painting.id === id) {
        this.painting = painting;
        this.index = this.paintings2003.indexOf(painting)
        this.maxLength = this.paintings2003.length - 1;
      }
    })
    this.artworkModal.nativeElement.style.display = 'block';

  }

  public closeModal(): void {
    this.artworkModal.nativeElement.style.display = 'none';
  }


  public previousImage(): void {
    if (this.index == 0) this.index = this.paintings2003.length;
    this.painting = this.paintings2003[this.index - 1];
    this.index--;
  }

  public nextImage(): void {
    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.paintings2003[this.index + 1];
    this.index++;
  }

}
