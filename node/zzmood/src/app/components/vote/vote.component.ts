import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChannelsService } from '../../services/channels.service';
import { VotesService } from '../../services/votes.service';
import { CommentsService } from '../../services/comments.service';
import 'rxjs/add/operator/switchMap';

declare var Fingerprint2: any;

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  channelId: string;
  channelTitle: string;
  fingerprintId: string;
  message: string;
  mood: boolean[];
  vote: number;

  submitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private votesService: VotesService,
    private channelsService: ChannelsService,
    private commentsService: CommentsService
  ) {
    this.channelId = route.snapshot.params['id'];
    this.verifyChannel(this.channelId);

    this.mood = [];
    this.moodReset();
    this.message = '';
    this.submitted = true;
    new Fingerprint2().get((result) => {
      this.fingerprintId = result;
    });
  }


  ngOnInit() {
  }

  toggle(j: number) {
    this.moodReset();
    this.mood[j] = true;
    this.vote = j + 1;
  }

  moodReset() {
    for (let i = 0; i < 5; i++) {
      this.mood[i] = false;
    }
  }

    /* Submitting the data to the database, after chosing
     the mood & writing a comment */
  submitData() {
    if (this.vote != null) {
      this.addVote();
    }
    if (this.message != null) {
      this.addComment();
    }
    this.submitted = true;
  }

  /* Creating a vote document, filling it with the date,
     the mood & the group. */
  addVote() {
    var newVote = {
      channelId: this.channelId,
      userId: this.fingerprintId,
      time: new Date(),
      status: this.vote
    };
    this.moodReset();
    this.votesService.addVote(newVote).subscribe(data => {
      this.submitted = false;
    });
  }

  /* Creating a Comment document, filling it with the date,
     & the group. */
  addComment() {
    if (this.message.length == 0) {
      return;
    }
    if (this.message.length > 500) {
      this.message = this.message.substring(0, 501);
    }
    let newComment = {
      channelId: this.channelId,
      userId: this.fingerprintId,
      time: new Date(),
      message: this.message
    };
    this.message = '';
    this.commentsService.addComment(newComment).subscribe(data => {
      this.submitted = false;
    });
  }

  getSmiley(i: number) {
    let smiley: String;
    if (i == 1) {
      smiley = ":(";
    } else if (i == 2) {
      smiley = ":/";
    } else if (i == 3) {
      smiley = ":|";
    } else if (i == 4) {
      smiley = ":)";
    } else if (i == 5) {
      smiley = ":D";
    }
    return smiley;
  }

  /* Check if channelId is valid */
  verifyChannel(channelId) {
    this.channelsService.getChannel(channelId).subscribe(
      data => {
        if (data == null) {
          this.errorId();
        } else {
          this.channelTitle = data.title;
        }
      },
      error => {
        this.errorId();
      }
    );
  }

  // Bad channelId
  errorId() {
    console.log('Error with channelId')
    console.log('Redirecting...');
    this.router.navigate(['/404']); // Or redirect to index ['/']
  }
}
