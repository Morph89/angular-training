import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./routes/search/search.module').then(m => m.SearchModule)
  },
  {
    path: '',
    redirectTo: 'search/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
