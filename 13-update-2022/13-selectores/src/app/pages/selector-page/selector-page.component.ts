import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-selector-page',
  standalone: false,

  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.scss'
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];
  public myForm!: FormGroup;
  private _formBuilder = inject(FormBuilder)
  private _countriesService = inject(CountriesService)
  countries: string[] = []

  constructor() {
    this.myForm = this._formBuilder.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      border: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.onRegionChanged()
  }

  get regions(): Region[] {
    return this._countriesService.regions;
  }

  getControl(control: string): FormControl {
    return this.myForm.get(control) as FormControl;
  }

  private onRegionChanged(): void {
    this.getControl('region').valueChanges.pipe(
      tap(() => {
        this.countriesByRegion = []
        this.myForm.get("country")?.reset('')
      }),
      filter((region) => region),
      switchMap((region) => this._countriesService.getContries(region)),
      tap((data) => this.countriesByRegion = [...data]),
    ).subscribe()


    this.getControl('country').valueChanges.pipe(
      tap(() => {
        this.myForm.get("border")?.reset('')
        this.borders = []
      }
      ),
      filter((country) => country),
      switchMap((alphaCode) => this._countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap((country) => this._countriesService.getCountryBordersByCodes(country.borders)),
      tap((countries) => this.borders = [...countries])
    ).subscribe()



  }


}
