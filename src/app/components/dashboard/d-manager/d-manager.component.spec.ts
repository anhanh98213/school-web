import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DManagerComponent } from './d-manager.component';

describe('DManagerComponent', () => {
  let component: DManagerComponent;
  let fixture: ComponentFixture<DManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
