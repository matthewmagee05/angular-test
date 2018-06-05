import { Component, OnInit } from '@angular/core';
import { GrabAllService } from "../grab-all.service";

@Component({
  selector: 'app-jukebox-hero',
  templateUrl: './jukebox-hero.component.html',
  styleUrls: ['./jukebox-hero.component.css']
})
export class JukeboxHeroComponent implements OnInit {

  myList : string[];

  constructor(private myService : GrabAllService) { }

  ngOnInit() {
    this.myList = this.myService.GimmeList();
  }

}
