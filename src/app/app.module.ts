import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    DetailsViewComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    PersonDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
