import { Component, OnInit } from '@angular/core';
import { NewServiceService} from '../new-service.service';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

  name : string;
  name2 : string;
  value: number;
  constructor(private newservice : NewServiceService) {
    this.name2 = this.newservice.printSomethingElse();
   }

  ngOnInit() {
    this.value = 0;
    this.name = this.newservice.printSomething();
  }

  incrementValue(){
    ++this.value;
  }

}
