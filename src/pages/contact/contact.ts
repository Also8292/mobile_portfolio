import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  title: string;
  constructor(public navCtrl: NavController) {
    this.title = "Contact";
  }

}
