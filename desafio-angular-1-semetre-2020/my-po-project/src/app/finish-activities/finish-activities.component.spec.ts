import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishActivitiesComponent } from './finish-activities.component';

describe('FinishActivitiesComponent', () => {
  let component: FinishActivitiesComponent;
  let fixture: ComponentFixture<FinishActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
