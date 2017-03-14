import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VotesService {
    constructor(private http: Http) {
    }

    addVote(newVote) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://zzmood.herokuapp.com/api/vote', JSON.stringify(newVote), { headers: headers }).map(res => res.json());
    }

    getVotes(channelId) {
        return this.http.get('https://zzmood.herokuapp.com/api/vote/' + channelId).map(res => res.json());
    }

}
