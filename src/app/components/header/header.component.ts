import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public class: string = "none";
  @ViewChild('menuDropDown', { static: false }) menuDropDown: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  public mouseEnter():void{
    this.menuDropDown.nativeElement.style.display = 'block';
  }

  public mouseLeave():void{
    this.menuDropDown.nativeElement.style.display = 'none'
  }
  public subNavLinks():void {

    let dropDown = this.menuDropDown.nativeElement.style.display;
    if (dropDown === 'block') 
    this.menuDropDown.nativeElement.style.display = 'none';
    else this.menuDropDown.nativeElement.style.display = 'block';
  
  }
}



