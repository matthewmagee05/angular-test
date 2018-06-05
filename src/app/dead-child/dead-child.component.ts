import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dead-child',
  templateUrl: './dead-child.component.html',
  styleUrls: ['./dead-child.component.css']
})
export class DeadChildComponent implements OnInit {

  @Input() name : string;

  constructor() { }

  ngOnInit() {
  }

}
