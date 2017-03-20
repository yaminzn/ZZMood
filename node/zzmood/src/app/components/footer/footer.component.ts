import { Component, OnInit } from '@angular/core';

/* A footer for the vote page,
   to give links to the code behind the app,
   to the developper team profiles, etc.. */
   
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
