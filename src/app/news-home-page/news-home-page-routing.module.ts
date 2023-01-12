import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsHomePageContainerComponent } from './news-home-page-container/news-home-page-container.component';

const routes: Routes = [{ path: '', component: NewsHomePageContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsHomePageRoutingModule { }
