
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtInsurancesComponent } from './healt-insurances.component';

describe('HealtInsurancesComponent', () => {
  let component: HealtInsurancesComponent;
  let fixture: ComponentFixture<HealtInsurancesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HealtInsurancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealtInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
