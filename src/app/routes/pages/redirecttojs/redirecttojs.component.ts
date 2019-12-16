import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirecttojs',
  templateUrl: './redirecttojs.component.html',
  styleUrls: ['./redirecttojs.component.scss']
})
export class RedirecttojsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var url = window.location.href;
    var finalurl = url.replace(/v2\//g, "");
    var dec = decodeURIComponent(finalurl);
    window.location.href = dec;
  }

}
