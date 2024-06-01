import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatfactSearchComponent } from './catfact-search/catfact-search.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: 'catfacts', component: CatfactSearchComponent},
  {path: 'detail', component: DetailComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
