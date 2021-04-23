import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMajorComponent } from './delete-major.component';

describe('DeleteMajorComponent', () => {
  let component: DeleteMajorComponent;
  let fixture: ComponentFixture<DeleteMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
