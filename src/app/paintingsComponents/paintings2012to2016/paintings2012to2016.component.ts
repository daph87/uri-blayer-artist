import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { openModal, closeModal, previousImage, nextImage } from 'src/app/global';

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
  // modal states
  public openModal = openModal;
  public closeModal = closeModal;
  public previousImage = previousImage;
  public nextImage = nextImage;
  
  constructor() { }

  ngOnInit(): void {
    // get the paintings
    fetch('assets/json/artworks-2012-2016.json').then(data => data.json())
    .then(paintings => {
      this.paintings = paintings;
    });
  }
}
