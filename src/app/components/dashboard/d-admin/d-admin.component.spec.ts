import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAdminComponent } from './d-admin.component';

describe('DAdminComponent', () => {
  let component: DAdminComponent;
  let fixture: ComponentFixture<DAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
