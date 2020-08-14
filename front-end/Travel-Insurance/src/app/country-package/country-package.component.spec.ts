import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPackageComponent } from './country-package.component';

describe('CountryPackageComponent', () => {
  let component: CountryPackageComponent;
  let fixture: ComponentFixture<CountryPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
