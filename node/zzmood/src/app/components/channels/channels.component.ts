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
  
  // Return time from now, i.e. "3 days ago"
  daysAgo(date: string) {
      return moment(new Date(date)).fromNow();
  }

  addToStorage(title: string) {   
      let arr = _.filter(this.storedChannels, function (e) { return e.title == title; });
      if (!(arr.length > 0)) {
          this.storedChannels.push({
              title: title,
              lastJoin: (new Date()).toISOString()
          });
      }
  }

  // Not used
  removeOne(title: string) {
    this.storedChannels.forEach((element, index) => {
      if (element.title == title) {
        this.storedChannels.splice(index, 1);
        this.store();
        return;
      }
    });
  }

  removeAll() {
    this.storedChannels = [];
    localStorage.removeItem('channels');
  }

  store() {
    localStorage.setItem('channels', JSON.stringify(this.storedChannels));
  }

  retrieve() {
    let chan = JSON.parse(localStorage.getItem('channels'));
    if (chan) {
      this.storedChannels = chan;
    }
  }

  // e : title
  addChannel(title: string) {
    var newChannel = {
      title: title
    };

    this.channelsService.addChannel(newChannel).subscribe(newChannelId => {
      this.router.navigate(['/v/' + newChannelId]);
    });
  }

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
