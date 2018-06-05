import { Component, OnInit } from '@angular/core';
import { GrabAllService} from '../grab-all.service';

@Component({
  selector: 'app-hero-things',
  templateUrl: './hero-things.component.html',
  styleUrls: ['./hero-things.component.css']
})
export class HeroThingsComponent implements OnInit {

  heroes: string[];
  constructor(private heroGrabber : GrabAllService) { }

  ngOnInit() {
    this.heroes = this.heroGrabber.GimmeList();
  }

}
