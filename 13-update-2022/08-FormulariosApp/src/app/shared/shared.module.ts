import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { EmailValidatorService } from './validator/email-validator.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SidemenuComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [SidemenuComponent],
  providers: [EmailValidatorService],
})
export class SharedModule {}
