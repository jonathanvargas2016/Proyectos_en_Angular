import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent implements OnInit {
  links!: NodeListOf<Element>

  private settingsService = inject(SettingsService)
  constructor() {  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector')

    this.settingsService.checkCurrentTheme(this.links)
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme, this.links)
  }

}
