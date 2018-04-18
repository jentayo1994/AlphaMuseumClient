import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ArticlesService } from './shared/services/articles.service';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionComponent } from './components/action/action.component';
import { EventComponent } from './components/event/event.component';
import { EventsService } from './shared/services/events.service';
import {ActionsService} from './shared/services/actions.service';
import { AllArticlesComponent } from './pages/all-articles/all-articles.component';
import { AllEventsComponent } from './pages/all-events/all-events.component';
import { AllActionsComponent } from './pages/all-actions/all-actions.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { ActionDetailComponent } from './pages/action-details/action-detail.component';
import { HistoryComponent } from './pages/history/history.component';
import { FondsComponent } from './pages/fonds/fonds.component';
import { AboutComponent } from './pages/about/about.component';
import { VisualComponent } from './pages/visual/visual.component';
import { ImgCardComponent } from './components/img-card/img-card.component';
import { ChronicleComponent } from './pages/history/pages/chronicle/chronicle.component';
import { HeadsOfUniversityComponent } from './pages/history/pages/heads-of-university/heads-of-university.component';
import { DepartmentsComponent } from './pages/history/pages/departments/departments.component';
import { GraduatesComponent} from './pages/history/pages/draduates/graduates.component';
import { VeteransComponent } from './pages/history/pages/veterans/veterans.component';
import { ArchivalDocumentsComponent } from './pages/fonds/pages/archival-documents/archival-documents.component';
import { MechanismsAndDevicesComponent } from './pages/fonds/pages/mechanisms-and-devices/mechanisms-and-devices.component';
import { LiteratureComponent } from './pages/fonds/pages/literature/literature.component';
import { AudiovisualMaterialsComponent } from './pages/fonds/pages/audiovisual-materials/audiovisual-materials.component';
import { ArtworksComponent } from './pages/fonds/pages/artworks/artworks.component';
import {HEventsService} from './shared/services/hevents.service';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent,
    CarouselComponent,
    PaginatorComponent,
    ArticleComponent,
    FooterComponent,
    ActionComponent,
    EventComponent,
    AllArticlesComponent,
    AllEventsComponent,
    AllActionsComponent,
    ArticleDetailComponent,
    EventDetailComponent,
    ActionDetailComponent,
    HistoryComponent,
    FondsComponent,
    AboutComponent,
    VisualComponent,
    ImgCardComponent,
    ChronicleComponent,
    HeadsOfUniversityComponent,
    DepartmentsComponent,
    GraduatesComponent,
    VeteransComponent,
    ArchivalDocumentsComponent,
    MechanismsAndDevicesComponent,
    LiteratureComponent,
    AudiovisualMaterialsComponent,
    ArtworksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAE9-k7gXOrdhgPabUvq0_I0xTQUHOd4Tk'
    }),
    AppRoutingModule,
    AuthModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ArticlesService, EventsService, ActionsService, HEventsService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
