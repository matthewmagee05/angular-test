import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherchildComponent } from './otherchild.component';

describe('OtherchildComponent', () => {
  let component: OtherchildComponent;
  let fixture: ComponentFixture<OtherchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
