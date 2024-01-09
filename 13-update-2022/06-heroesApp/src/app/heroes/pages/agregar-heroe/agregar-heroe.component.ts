import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarModalComponent } from '@modules/heroes/components/confirmar-modal/confirmar-modal.component';
import { Heroe, Publisher } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';
import { filter, tap } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html',
  styleUrls: ['./agregar-heroe.component.css'],
})
export class AgregarHeroeComponent implements OnInit {
  heroe!: Heroe;

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroeForm!: FormGroup;
  loading: boolean = false;
  isEdit: boolean = false;
  durationInSeconds: number = 5;
  private formBuilder!: FormBuilder;
  private route!: ActivatedRoute;
  private location!: Location;

  constructor(
    private injector: Injector,
    private heroeService: HeroesService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.formBuilder = injector.get(FormBuilder);
    this.route = injector.get(ActivatedRoute);
    this.location = injector.get(Location);
    this.buildForm();
    this.editData();
  }

  showSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: this.durationInSeconds,
    });
  }

  editData() {
    this.heroe = this.route.snapshot.data['heroe'];

    if (!this.heroe) return;
    this.isEdit = true;
    this.heroeForm.patchValue({
      superhero: this.heroe.superhero,
      publisher: this.heroe.publisher,
      alterEgo: this.heroe.alterEgo,
      firstAppearance: this.heroe.firstAppearance,
      characters: this.heroe.characters,
      altImg: this.heroe.altImg,
    });
  }

  buildForm() {
    this.heroeForm = this.formBuilder.group({
      superhero: ['', [Validators.required]],
      publisher: [Publisher.DCComics, [Validators.required]],
      alterEgo: ['', [Validators.required]],
      firstAppearance: ['', [Validators.required]],
      characters: ['', [Validators.required]],
      altImg: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmitHeroe() {
    this.heroeForm.markAllAsTouched();

    if (this.heroeForm.invalid) return;

    this.loading = true;

    const data = this.isEdit
      ? { id: this.heroe.id, ...this.heroeForm.getRawValue() }
      : { ...this.heroeForm.getRawValue() };

    const respObservable = this.isEdit
      ? this.heroeService.updateHeroe(data)
      : this.heroeService.createHeroe(data);

    respObservable.subscribe({
      next: () => {
        this.loading = false;
        this.showSnackBar('Registro guardado');
        this.location.back();
      },
      error: () => {
        this.loading = false;
        this.showSnackBar('Error al guardar el registro');
      },
    });
  }

  resetForm() {
    this.heroeForm.reset({
      superhero: '',
      publisher: '',
      alterEgo: '',
      firstAppearance: '',
      characters: '',
      altImg: '',
    });
  }

  deleteHeroe() {
    const resp = this.dialog.open(ConfirmarModalComponent, {
      width: ' 450px',
      data: { ...this.heroe },
    });

    resp
      .afterClosed()
      .pipe(
        filter((res) => res),
        tap(() => (this.loading = true)),
        switchMap(() => this.heroeService.deleteHeroe(this.heroe.id!)),
        tap(
          () => {
            this.loading = false;
            this.location.back();
          },
          catchError(() => {
            this.loading = false;
            return [];
          })
        )
      )
      .subscribe();
  }

  get superhero() {
    return this.heroeForm.get('superhero') as FormControl;
  }
}
