import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPageComponent} from './search-page/search-page.component';
import {RouterModule, Routes} from "@angular/router";
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '', component: SearchPageComponent, children: [
      {
        path: 'overview', component: OverviewComponent
      }
    ]
  }
]

@NgModule({
  declarations: [SearchPageComponent, OverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchModule { }
