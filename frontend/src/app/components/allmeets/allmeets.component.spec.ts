import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmeetsComponent } from './allmeets.component';

describe('AllmeetsComponent', () => {
  let component: AllmeetsComponent;
  let fixture: ComponentFixture<AllmeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
