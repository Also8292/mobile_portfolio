import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { ProjetsPage } from '../pages/projets/projets';
import { ProjetPage } from '../pages/projets/projet/projet';
import { BlogPage } from './../pages/blog/blog';
import { ArticlePage } from '../pages/blog/article/article';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ProjetsPage,
    ProjetPage,
    BlogPage,
    ArticlePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ProjetsPage,
    ProjetPage,
    BlogPage,
    ArticlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
