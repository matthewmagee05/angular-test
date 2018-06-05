import { Component, OnInit } from '@angular/core';
import{GrabAllService} from '../grab-all.service';

@Component({
  selector: 'app-testrun',
  templateUrl: './testrun.component.html',
  styleUrls: ['./testrun.component.css']
})
export class TestrunComponent implements OnInit {

hero :string[];

  constructor(private serv: GrabAllService) { }

  ngOnInit() {
    this.hero = this.serv.GimmeList();
  }

}
