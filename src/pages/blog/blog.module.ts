import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from './blog';
import { ArticlePage } from './article/article';

@NgModule({
  declarations: [
    BlogPage,
    ArticlePage
  ],
  imports: [
    IonicPageModule.forChild(BlogPage),
  ],
})
export class BlogPageModule {}
