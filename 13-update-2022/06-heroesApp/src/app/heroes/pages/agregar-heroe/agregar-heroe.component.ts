import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Heroe, Publisher } from '@modules/heroes/models/heroe.interface';
import { HeroesService } from '@modules/heroes/services/heroes.service';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html',
  styleUrls: ['./agregar-heroe.component.css'],
})
export class AgregarHeroeComponent implements OnInit {
  heroe: Heroe = {
    id: '',
    superhero: '',
    publisher: Publisher.DCComics,
    alterEgo: '',
    firstAppearance: '',
    characters: '',
  };

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
  private formBuilder!: FormBuilder;

  constructor(private injector: Injector, private heroeService: HeroesService) {
    this.formBuilder = injector.get(FormBuilder);
    this.buildForm();
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

  saveHeroe() {
    this.heroeForm.markAllAsTouched();
    console.log('heroe');

    if (this.heroeForm.invalid) return;

    this.loading = true;
    this.heroeService.createHeroe(this.heroeForm.getRawValue()).subscribe(
      (heroe) => {
        console.log('heroe creado', heroe);
        this.resetForm();
        this.loading = false;
      },
      (err) => {
        console.log('error', err);
        this.loading = false;
      }
    );
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
}
