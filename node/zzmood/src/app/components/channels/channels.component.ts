import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelsService } from '../../services/channels.service';
import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  storedChannels: {title: string, lastJoin: string}[];

  constructor(private channelsService: ChannelsService, private router: Router) {
    this.storedChannels = [];
    this.retrieve();
  }

  ngOnInit() {
  }
  
  /* Return time from now, i.e. "3 days ago" */
  daysAgo(date: string) {
      return moment(new Date(date)).fromNow();
  }

  /* Create a list of the last groups the user entered */
  addToStorage(title: string) {   
      let arr = _.filter(this.storedChannels, function (e) { return e.title == title; });
      if (!(arr.length > 0)) {
          this.storedChannels.push({
              title: title,
              lastJoin: (new Date()).toISOString()
          });
      }
  }

  /* Removing an element from the "last groups visited" list */
  removeOne(title: string) {
    this.storedChannels.forEach((element, index) => {
      if (element.title == title) {
        this.storedChannels.splice(index, 1);
        this.store();
        return;
      }
    });
  }

  /* Removing all the elements from the "last groups visited" list */
  removeAll() {
    this.storedChannels = [];
    localStorage.removeItem('channels');
  }

  /* When a new groups is visited, adds it to the "last group visited" list */
  store() {
    localStorage.setItem('channels', JSON.stringify(this.storedChannels));
  }

  retrieve() {
    let chan = JSON.parse(localStorage.getItem('channels'));
    if (chan) {
      this.storedChannels = chan;
    }
  }

  /* Add the channel to the data, if it's a new channel */
  addChannel(title: string) {
    var newChannel = {
      title: title
    };

    this.channelsService.addChannel(newChannel).subscribe(newChannelId => {
      this.router.navigate(['/v/' + newChannelId]);
    });
  }

   /* Checking whether the channel is Valid or not */
  checkChannel(title: string) {
    this.channelsService.getChannels().subscribe(channels => { //Get all channels
      let chan = channels.filter(x => x.title == title); //Filter results
      this.addToStorage(title);
      this.store();    
      if (chan.length == 0) { //Join if it exists
        this.addChannel(title);
      } else {
        this.router.navigate(['/v/' + chan[0]._id]);
      }
    });
  }
}
