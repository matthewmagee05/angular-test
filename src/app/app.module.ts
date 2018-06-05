import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ChildbarComponent } from './childbar/childbar.component';
import { OtherchildComponent } from './otherchild/otherchild.component';
import { OrphanedChildComponent } from './orphaned-child/orphaned-child.component';
import { DeadChildComponent } from './dead-child/dead-child.component';
import { FoobarComponent } from './foobar/foobar.component';
import { TestrunComponent } from './testrun/testrun.component';
import { HeroThingsComponent } from './hero-things/hero-things.component';
import { JukeboxHeroComponent } from './jukebox-hero/jukebox-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChildbarComponent,
    OtherchildComponent,
    OrphanedChildComponent,
    DeadChildComponent,
    FoobarComponent,
    TestrunComponent,
    HeroThingsComponent,
    JukeboxHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
