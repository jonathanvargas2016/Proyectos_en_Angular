import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): void;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private links!: NodeListOf<Element>

  private settingsService = inject(SettingsService)

  ngOnInit(): void {
    customInitFunction()
    this.links = document.querySelectorAll('.selector')

    this.settingsService.checkCurrentTheme(this.links)
  }

}
