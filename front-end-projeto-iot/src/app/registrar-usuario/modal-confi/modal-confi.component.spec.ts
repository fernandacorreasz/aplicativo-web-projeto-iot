import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfiComponent } from './modal-confi.component';

describe('ModalConfiComponent', () => {
  let component: ModalConfiComponent;
  let fixture: ComponentFixture<ModalConfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
