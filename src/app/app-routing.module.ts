import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'list-view', component: ListViewComponent },
  { path: 'details-view/:id', component: DetailsViewComponent },
  { path: '', redirectTo: '/list-view', pathMatch: 'full' },
  // { path: 'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
