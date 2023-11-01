import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriesComponent } from './esries.component';

describe('EsriesComponent', () => {
  let component: EsriesComponent;
  let fixture: ComponentFixture<EsriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
