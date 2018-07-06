
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsComponent } from './patients.component';

describe('PatientsComponent', () => {
  let component: PatientsComponent;
  let fixture: ComponentFixture<PatientsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});