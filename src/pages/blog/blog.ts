import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ArticlePage } from './article/article';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Ateliers";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  goToArticle() {
    this.navCtrl.push(ArticlePage);
  }

}
