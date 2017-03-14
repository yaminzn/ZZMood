import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChartsComponent } from './components/charts/charts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VoteComponent } from './components/vote/vote.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

import { ChannelsService } from './services/channels.service';
import { VotesService } from './services/votes.service';
import { CommentsService } from './services/comments.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';


const appRoutes: Routes = [
  { path: '', component: ChannelsComponent },         // Homepage
  { path: 'chart/:id', component: ChartsComponent },  // View results
  { path: 'v/:id', component: VoteComponent },        // Vote
  { path: 'get-started', component: GetStartedComponent }, // Quick explaination       
  { path: '**', component: PageNotFoundComponent }    // Not something above
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChannelsComponent,
    ChartsComponent,
    PageNotFoundComponent,
    VoteComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [
    ChannelsService,
    VotesService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
