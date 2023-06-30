import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { filter, Observable, of, switchMap, tap } from 'rxjs';
import { CountrySmall } from '../../models/country.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {
  meForm!: FormGroup;

  regiones: string[] = [];
  countryList$!: Observable<CountrySmall[]>;
  private fornmBuilder!: FormBuilder;
  constructor(
    private injector: Injector,
    private paisesService: PaisesService
  ) {
    this.fornmBuilder = injector.get(FormBuilder);
    this.setBuild();
    this.registerEvents();
  }

  setBuild() {
    this.meForm = this.fornmBuilder.group({
      region: ['', [Validators.required]],
      country: ['', [Validators.required]],
      borders: [[], [Validators.required]],
    });
  }

  registerEvents() {
    this.region.valueChanges
      .pipe(
        tap(() => {
          this.country.reset('');
          this.countryList$ = of([]);
        }),
        filter((value) => value && value.length > 0),
        switchMap((value) => this.paisesService.getCountries(value))
      )
      .subscribe((countries) => {
        this.countryList$ = of([...countries]);
      });

    this.getBordersByCountry();
  }

  getBordersByCountry() {
    this.country.valueChanges
      .pipe(
        filter((value) => value && value.length > 0),
        tap((value) => console.log('value', value)),
        switchMap((value) => this.paisesService.getBordersByCountry(value))
      )
      .subscribe((value) => console.log('value', value));
  }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
  }

  onSubmit() {
    console.log('obsubmit', this.meForm.getRawValue());
  }

  get region() {
    return this.meForm.get('region') as FormControl;
  }

  get country() {
    return this.meForm.get('country') as FormControl;
  }
}
