import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoDialogComponent } from './termo-dialog.component';

describe('TermoDialogComponent', () => {
  let component: TermoDialogComponent;
  let fixture: ComponentFixture<TermoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
