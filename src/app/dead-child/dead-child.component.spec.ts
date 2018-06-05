import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadChildComponent } from './dead-child.component';

describe('DeadChildComponent', () => {
  let component: DeadChildComponent;
  let fixture: ComponentFixture<DeadChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
