import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirComponent } from './afegir.component';

describe('AfegirComponent', () => {
  let component: AfegirComponent;
  let fixture: ComponentFixture<AfegirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfegirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
