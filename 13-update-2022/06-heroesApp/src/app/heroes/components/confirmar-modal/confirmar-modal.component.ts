import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '@modules/heroes/models/heroe.interface';

@Component({
  selector: 'app-confirmar-modal',
  templateUrl: './confirmar-modal.component.html',
  styleUrls: ['./confirmar-modal.component.css'],
})
export class ConfirmarModalComponent implements OnInit {
  heroe!: Heroe;
  constructor(
    private dialogRef: MatDialogRef<ConfirmarModalComponent>,
    private injector: Injector
  ) {
    this.heroe = injector.get(MAT_DIALOG_DATA);
  }

  ngOnInit(): void {}

  acept() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
