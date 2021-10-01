import { Component, OnInit } from '@angular/core';
import {FileItem} from "../../../Modelos/FileItem";
import {CargarArchivosService} from "../../../Servicios/cargar-archivos.service";

@Component({
  selector: 'app-medios',
  templateUrl: './medios.component.html',
  styleUrls: ['./medios.component.css']
})
export class MediosComponent implements OnInit {

  images: any[];

  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  responsiveOptions2:any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayBasic: boolean;

  displayBasic2: boolean;

  displayCustom: boolean;

  activeIndex: number = 0;
  archivosImg: FileItem[] = []
  bandera = false
  constructor(/*private photoService: PhotoService*/public readonly cargarArchivoService: CargarArchivosService) { }

  ngOnInit() {
    /*this.photoService.getImages().then(images =>{
      this.images = images
    })*/
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

}
