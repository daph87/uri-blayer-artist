import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { Article } from 'src/models/article';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-paintings2012to2016',
  templateUrl: './paintings2012to2016.component.html',
  styleUrls: ['./paintings2012to2016.component.scss']
})
export class Paintings2012to2016Component implements OnInit {

  public paintings: any[]=[];
  public index: number;
  public maxLength : number;
  public painting: any = {};
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2012-2016.json').then(data => data.json())
    .then(paintings => {
      this.paintings = paintings;

    });
  }

  public openModal(id) {
    this.paintings.map((painting) => {
      if (painting.id === id) {
        this.painting = painting;
        this.index = this.paintings.indexOf(painting)
        this.maxLength = this.paintings.length - 1;
      }
    })
    this.artworkModal.nativeElement.style.display = 'block';

  }

  public closeModal(): void {
    this.artworkModal.nativeElement.style.display = 'none';
  }


  public previousImage(): void {
    if (this.index == 0) this.index = this.paintings.length;
    this.painting = this.paintings[this.index - 1];
    this.index--;
  }

  public nextImage(): void {
    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.paintings[this.index + 1];
    this.index++;
  }

}
