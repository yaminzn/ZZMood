import { Component } from '@angular/core';
import { ChannelsService } from './services/channels.service';
import { VotesService } from './services/votes.service';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChannelsService, VotesService, CommentsService]
})
export class AppComponent {
}
