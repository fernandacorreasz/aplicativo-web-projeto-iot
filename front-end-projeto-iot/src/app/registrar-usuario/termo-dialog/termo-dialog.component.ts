import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-termo-dialog',
  templateUrl: './termo-dialog.component.html',
  styleUrls: ['./termo-dialog.component.css'],
})
export class TermoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TermoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
