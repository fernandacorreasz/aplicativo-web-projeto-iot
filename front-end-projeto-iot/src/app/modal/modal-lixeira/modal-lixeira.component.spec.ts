import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLixeiraComponent } from './modal-lixeira.component';

describe('ModalLixeiraComponent', () => {
  let component: ModalLixeiraComponent;
  let fixture: ComponentFixture<ModalLixeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLixeiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLixeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
