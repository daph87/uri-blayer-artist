import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { closeModal } from 'src/app/global';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('artworkModal', { static: false }) artworkModal: ElementRef;
  public closeModal = closeModal;

  constructor() { }

  ngOnInit(): void {
  }


  public openModal() {
    
    this.artworkModal.nativeElement.style.display = 'block';
 
}
  public myResume(): void {

   
      window.open('/assets/cv/uri-blayer-cv.pdf' );
    
  }

}
