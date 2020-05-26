import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestreactiveComponent } from './testreactive.component';

describe('TestreactiveComponent', () => {
  let component: TestreactiveComponent;
  let fixture: ComponentFixture<TestreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
