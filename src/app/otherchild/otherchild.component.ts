import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-otherchild',
  templateUrl: './otherchild.component.html',
  styleUrls: ['./otherchild.component.css']
})
export class OtherchildComponent implements OnInit {

@Input()
thevar;

  constructor() { }

  ngOnInit() {
  }

}
