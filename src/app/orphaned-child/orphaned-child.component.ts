import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orphaned-child',
  templateUrl: './orphaned-child.component.html',
  styleUrls: ['./orphaned-child.component.css']
})
export class OrphanedChildComponent implements OnInit {

  constructor() { }

  @Input()
  orphanName;



  ngOnInit() {
  }

}
