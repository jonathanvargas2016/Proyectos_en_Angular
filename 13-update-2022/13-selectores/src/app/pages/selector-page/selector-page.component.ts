import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';
import { Region } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-selector-page',
  standalone: false,

  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.scss'
})
export class SelectorPageComponent implements OnInit {
  public myForm!: FormGroup;
  private _formBuilder = inject(FormBuilder)
  private _countriesService = inject(CountriesService)
  countries: string[] = []  

  constructor() {
    this.myForm = this._formBuilder.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      borders: ['', Validators.required]
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
      filter((region) => region),
      tap((region) => console.log("---->", region)),
      switchMap((region) => this._countriesService.getContries(region)),
      tap((data) => console.log("---->", data)),
      

    ).subscribe()
  }


}
