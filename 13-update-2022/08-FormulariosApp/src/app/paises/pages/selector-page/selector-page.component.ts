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
  countryList: CountrySmall[] = [];
  borderList: string[] = [];
  loading: boolean = false;
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
      borders: ['', [Validators.required]],
    });
  }

  registerEvents() {
    this.region.valueChanges
      .pipe(
        tap(() => {
          this.country.reset('');
          this.countryList = [];
          this.loading = true;
        }),
        filter((value) => value && value.length > 0),
        switchMap((value) => this.paisesService.getCountries(value))
      )
      .subscribe((countries) => {
        this.countryList = [...countries];
        this.loading = false;
      });

    this.getBordersByCountry();
  }

  getBordersByCountry() {
    this.country.valueChanges
      .pipe(
        tap(() => {
          this.border.reset('');
          this.borderList = [];
        }),
        filter((value) => value && value.length > 0),
        switchMap((value) => this.paisesService.getBordersByCountry(value))
      )
      .subscribe({
        next: (resCountry) => {
          console.log('res', resCountry[0].borders);
          this.borderList = resCountry[0].borders || [];
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
  }

  onSubmit() {
    if (this.meForm.invalid) return;
    console.log('obsubmit', this.meForm.getRawValue());
  }

  get region() {
    return this.meForm.get('region') as FormControl;
  }

  get country() {
    return this.meForm.get('country') as FormControl;
  }

  get border() {
    return this.meForm.get('borders') as FormControl;
  }
}
