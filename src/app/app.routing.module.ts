import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AllArticlesComponent} from './pages/all-articles/all-articles.component';
import {AllEventsComponent} from './pages/all-events/all-events.component';
import {AllActionsComponent} from './pages/all-actions/all-actions.component';
import {EventDetailComponent} from './pages/event-detail/event-detail.component';
import {ArticleDetailComponent} from './pages/article-detail/article-detail.component';
import {ActionDetailComponent} from './pages/action-details/action-detail.component';
import {HistoryComponent} from './pages/history/history.component';
import {FondsComponent} from './pages/fonds/fonds.component';
import {AboutComponent} from './pages/about/about.component';
import {VisualComponent} from './pages/visual/visual.component';
import {ChronicleComponent} from './pages/history/pages/chronicle/chronicle.component';
import {HeadsOfUniversityComponent} from './pages/history/pages/heads-of-university/heads-of-university.component';
import {VeteransComponent} from './pages/history/pages/veterans/veterans.component';
import {GraduatesComponent} from './pages/history/pages/draduates/graduates.component';
import {DepartmentsComponent} from './pages/history/pages/departments/departments.component';
import {ArchivalDocumentsComponent} from './pages/fonds/pages/archival-documents/archival-documents.component';
import {ArtworksComponent} from './pages/fonds/pages/artworks/artworks.component';
import {AudiovisualMaterialsComponent} from './pages/fonds/pages/audiovisual-materials/audiovisual-materials.component';
import {LiteratureComponent} from './pages/fonds/pages/literature/literature.component';
import {MechanismsAndDevicesComponent} from './pages/fonds/pages/mechanisms-and-devices/mechanisms-and-devices.component';

const routes: Routes = [
    {path: 'login', redirectTo: '/login', pathMatch: 'full'},
    {path: 'registration', redirectTo: '/registration', pathMatch: 'full'},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'actions', component: AllActionsComponent},
    {path: 'actions/:id', component: ActionDetailComponent},
    {path: 'events/:id', component: EventDetailComponent},
    {path: 'events', component: AllEventsComponent},
    {path: 'fonds', component: FondsComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'home', component: HomeComponent },
    {path: 'news', component: AllArticlesComponent},
    {path: 'news/:id', component: ArticleDetailComponent},
    {path: 'visual', component: VisualComponent},
    {path: 'history/chronicle', component: ChronicleComponent},
    {path: 'history/heads-of-university', component: HeadsOfUniversityComponent},
    {path: 'history/departments', component: DepartmentsComponent},
    {path: 'history/graduates', component: GraduatesComponent},
    {path: 'history/veterans', component: VeteransComponent},
    {path: 'fonds/archival-documents', component: ArchivalDocumentsComponent},
    {path: 'fonds/artworks', component: ArtworksComponent},
    {path: 'fonds/audiovisual-materials', component: AudiovisualMaterialsComponent},
    {path: 'fonds/literature', component: LiteratureComponent},
    {path: 'fonds/mechanisms-and-devices', component: MechanismsAndDevicesComponent},

    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class AppRoutingModule {}
