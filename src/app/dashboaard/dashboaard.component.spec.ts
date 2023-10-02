import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaardComponent } from './dashboaard.component';

describe('DashboaardComponent', () => {
  let component: DashboaardComponent;
  let fixture: ComponentFixture<DashboaardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboaardComponent]
    });
    fixture = TestBed.createComponent(DashboaardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
