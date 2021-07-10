import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {map, finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfoPersonalService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathIP = 'informacionPersonal';
  urlImage: Observable<string>;
  pdfCV: Observable<string>;
  espera = false;
  cargado = false;
  id = "";
  constructor(private readonly afs: AngularFirestore,
              public readonly authService: AuthService,
              private readonly storage: AngularFireStorage) {
    this.itemsCollection = afs.collection<any>(this.pathIP)
    this.urlImage = new Observable<string>();
    this.pdfCV = new Observable<string>();
    this.id = Math.random().toString(36).substring(2)

  }


  cargarFormularioCompleto(infoPersonal: any, imagenCapturada: any, pdfCV: any){
    this.cargarImagen(imagenCapturada, infoPersonal);
    this.cargarPdfCV(pdfCV, infoPersonal);
    this.espera = true

    // cargar formulario
    setTimeout(()=>{
      if(infoPersonal.imagen && infoPersonal.pdfCV){
        infoPersonal.uid = this.authService.usuario.uid
        this.itemsCollection.add(infoPersonal).then()
      }
      this.cargado = true;
      this.espera = false;
    }, 3000)
  }

  getInfoPersonal(){
    this.itemsCollection = this.afs.collection<any>(this.pathIP)
    return this.itemsCollection.valueChanges().pipe(map(datosIP =>{
      return datosIP;
    }))
  }

  private cargarImagen(imagenCapturada: any, infoPersonal: any){

    const filePath = `img/img_${this.id}`
    const ref = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, imagenCapturada);
    task.snapshotChanges().pipe(finalize( ()=>{
      this.urlImage = ref.getDownloadURL()

      this.urlImage.subscribe((url)=>{
        return infoPersonal.imagen = url
      })
    })).subscribe()
  }

  private cargarPdfCV(pdfCVCapturado: any, infoPersonal: any): any{
    const idPdf = Math.random().toString(36).substring(2)
    const filePath = `file/pdf_${idPdf}`
    const ref = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, pdfCVCapturado);
    task.snapshotChanges().pipe(finalize( ()=>{
      this.pdfCV = ref.getDownloadURL()
      this.pdfCV.subscribe((url)=>{
        return infoPersonal.pdfCV = url
      })
    })).subscribe()
  }


}
