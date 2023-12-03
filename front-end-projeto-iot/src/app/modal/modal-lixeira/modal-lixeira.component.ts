import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-lixeira',
  templateUrl: './modal-lixeira.component.html',
  styleUrls: ['./modal-lixeira.component.css']
})
export class ModalLixeiraComponent implements OnInit {

  lixeiraForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalLixeiraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.lixeiraForm = this.fb.group({
      deviceId: ['', Validators.required],
      location: ['', Validators.required],
      fillLevel: ['', Validators.required],
      lastUpdate: ['', Validators.required],
    });
  }

  salvar() {
    if (this.lixeiraForm.valid) {
      this.dialogRef.close(this.lixeiraForm.value);
    }
  }

  fechar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
