import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miForm') miForm!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 1500,
    existencias: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miForm?.controls['producto']?.invalid &&
      this.miForm?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miForm?.controls['precio']?.value < 0 &&
      this.miForm?.controls['precio']?.touched
    );
  }
  onSubmit() {
    console.log('submit hecho', this.miForm);

    this.miForm.resetForm({
      precio: 0,
      existencias: 0,
    });
  }
}
