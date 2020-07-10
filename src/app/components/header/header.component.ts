import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public class: string = "none";
  @ViewChild('menuDropDown', { static: false }) menuDropDown: ElementRef;
  @ViewChild('articlesDropDown', { static: false }) articlesDropDown: ElementRef;
  @ViewChild('hamburger', { static: false }) hamburger: ElementRef;

  public activateMenu(): void {
    let dropDown = this.hamburger.nativeElement.style.display;
    this.hamburger.nativeElement.style.visibility = 'visible';
    if (dropDown === 'block')
      this.hamburger.nativeElement.style.display = 'none';
    else this.hamburger.nativeElement.style.display = 'block';
    if (this.articlesDropDown.nativeElement.style.display === 'block')
      this.articlesDropDown.nativeElement.style.display = 'none';
  }

  public displayArticels(): void {
    if (this.articlesDropDown.nativeElement.style.display === 'block') {
      this.articlesDropDown.nativeElement.style.display = 'none';
      this.hamburger.nativeElement.style.visibility = 'visible';
    }
    else {
      this.articlesDropDown.nativeElement.style.display = 'block';
      this.hamburger.nativeElement.style.visibility = 'hidden';
    }
  }

  public mouseEnter(): void {
    this.menuDropDown.nativeElement.style.display = 'block';
  }

  public mouseLeave(): void {
    this.menuDropDown.nativeElement.style.display = 'none'
  }
  public subNavLinks(): void {

    let dropDown = this.menuDropDown.nativeElement.style.display;
    if (dropDown === 'block')
      this.menuDropDown.nativeElement.style.display = 'none';
    else this.menuDropDown.nativeElement.style.display = 'block';

  }
}



