import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanedChildComponent } from './orphaned-child.component';

describe('OrphanedChildComponent', () => {
  let component: OrphanedChildComponent;
  let fixture: ComponentFixture<OrphanedChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphanedChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
