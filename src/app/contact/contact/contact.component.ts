import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('conditionsModal', { static: false }) conditionsModal: ElementRef;
  public buttonMessage: string = '';
  public modalMessage: string = '';

  public newContact = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public sendMessage(): void {
    let newContact = this.newContact.value;
    const emailValidation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (newContact.subject === '' || newContact.message === '') {
      this.buttonMessage = 'I understand';
      this.modalMessage = 'Please fill the required fields';
      this.conditionsModal.nativeElement.style.display = 'block'
    } else {
      if (emailValidation.test(newContact.email)) {
        this.conditionsModal.nativeElement.style.display = 'block'
        // modal messages
        this.buttonMessage = 'Ok';
        this.modalMessage = 'Your message has been sent successfully. We will contact you soon';
        this.conditionsModal.nativeElement.style.display = 'block'
        // send message
        const contact = firebase.functions().httpsCallable('newContact');
        contact(newContact);
      } else {
        // modal messages
        this.conditionsModal.nativeElement.style.display = 'block'
        this.buttonMessage = 'I understand';
        this.modalMessage = 'This email is not correct, please type again.';
        this.conditionsModal.nativeElement.style.display = 'block'
      }
    }
  }

  public closeModal() {
    this.conditionsModal.nativeElement.style.display = 'none';
  }

}




