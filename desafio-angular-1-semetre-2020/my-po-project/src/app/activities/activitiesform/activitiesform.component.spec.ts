import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesformComponent } from './activitiesform.component';

describe('ActivitiesformComponent', () => {
  let component: ActivitiesformComponent;
  let fixture: ComponentFixture<ActivitiesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
