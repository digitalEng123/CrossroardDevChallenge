import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { TitleComponent } from './components/title/title.component';
import { TitleDetailComponent } from './components/title-detail/title-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'titles', component: TitleComponent },
  { path: 'titleDetails', component: TitleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
