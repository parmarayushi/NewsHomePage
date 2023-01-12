import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsHomePageRoutingModule } from './news-home-page-routing.module';
import { NewsHomePageComponent } from './news-home-page.component';
import { NewsHomePageContainerComponent } from './news-home-page-container/news-home-page-container.component';
import { NewsHomePagePresentationComponent } from './news-home-page-container/news-home-page-presentation/news-home-page-presentation.component';


@NgModule({
  declarations: [
    NewsHomePageComponent,
    NewsHomePageContainerComponent,
    NewsHomePagePresentationComponent
  ],
  imports: [
    CommonModule,
    NewsHomePageRoutingModule
  ]
})
export class NewsHomePageModule { }
