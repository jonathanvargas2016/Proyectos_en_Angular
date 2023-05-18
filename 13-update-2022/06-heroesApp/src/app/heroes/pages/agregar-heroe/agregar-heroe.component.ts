import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';

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
  private formBuilder!: FormBuilder;
  private route!: ActivatedRoute;
  private location!: Location;
  constructor(private injector: Injector, private heroeService: HeroesService) {
    this.formBuilder = injector.get(FormBuilder);
    this.route = injector.get(ActivatedRoute);
    this.location = injector.get(Location);
    this.buildForm();
    this.editData();
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
        this.location.back();
      },
      error: () => (this.loading = false),
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
    this.heroeService.deleteHeroe(this.heroe.id!).subscribe({
      next: () => {
        this.loading = false;
        this.location.back();
      },
      error: () => (this.loading = false),
    });
  }

  get superhero() {
    return this.heroeForm.get('superhero') as FormControl;
  }
}
