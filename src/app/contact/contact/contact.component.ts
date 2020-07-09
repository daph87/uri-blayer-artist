import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
    if (emailValidation.test(newContact.email)) {
      console.log('contact: ', newContact);
      alert('sending...');
      const contact = firebase.functions().httpsCallable('newContact');
      contact(newContact);
    } else {
      alert('Ilegal email address, please type again.');
    }

  }

}
