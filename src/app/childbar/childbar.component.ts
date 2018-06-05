import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childbar',
  templateUrl: './childbar.component.html',
  styleUrls: ['./childbar.component.css']
})
export class ChildbarComponent implements OnInit {

  @Input()
  myVariable;
  
  id:number;
  constructor() { }

  ngOnInit() {
    this.id = 1;
  }

}
