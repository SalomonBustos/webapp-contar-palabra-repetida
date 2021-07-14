import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContarRepeticionesPalabraComponent } from './contar-repeticiones-palabra.component';

describe('ContarRepeticionesPalabraComponent', () => {
  let component: ContarRepeticionesPalabraComponent;
  let fixture: ComponentFixture<ContarRepeticionesPalabraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContarRepeticionesPalabraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContarRepeticionesPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
