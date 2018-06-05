import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.component.html',
  styleUrls: ['./foobar.component.css']
})
export class FoobarComponent implements OnInit {

@Input()
datVariable;


  constructor() { }

  ngOnInit() {
  }

}
