import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XwingComponent } from './xwing.component';

describe('XwingComponent', () => {
  let component: XwingComponent;
  let fixture: ComponentFixture<XwingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XwingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
