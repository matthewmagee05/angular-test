import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JukeboxHeroComponent } from './jukebox-hero.component';

describe('JukeboxHeroComponent', () => {
  let component: JukeboxHeroComponent;
  let fixture: ComponentFixture<JukeboxHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JukeboxHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JukeboxHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
