import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  { path: 'list-view', component: ListViewComponent },
  { path: 'details-view/:id', component: DetailsViewComponent },
  { path: '', redirectTo: '/list-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
