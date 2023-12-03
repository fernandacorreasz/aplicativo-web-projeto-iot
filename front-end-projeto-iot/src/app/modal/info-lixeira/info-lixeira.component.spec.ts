import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLixeiraComponent } from './info-lixeira.component';

describe('InfoLixeiraComponent', () => {
  let component: InfoLixeiraComponent;
  let fixture: ComponentFixture<InfoLixeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLixeiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLixeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
