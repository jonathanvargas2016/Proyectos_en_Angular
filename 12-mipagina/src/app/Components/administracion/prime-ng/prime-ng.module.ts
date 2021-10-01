import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {GalleriaModule} from "primeng/galleria";
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    ToastModule,
    GalleriaModule,
    ProgressBarModule
  ],
  exports:[
    AvatarModule,
    ButtonModule,
    ToastModule,
    GalleriaModule,
    ProgressBarModule
  ]
})
export class PrimeNgModule { }
