import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrabAllService {

hero: string[];

  constructor() { 
    this.hero = ["Matt", "Tone", "Billy", "L0uis", "A-a-ron"];
   }

GimmeList(){
  return this.hero;
}

}
