import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroThingsComponent } from './hero-things.component';

describe('HeroThingsComponent', () => {
  let component: HeroThingsComponent;
  let fixture: ComponentFixture<HeroThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
