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
  mensajeError = "";
  constructor(private readonly afs: AngularFirestore,
              public readonly authService: AuthService,
              private readonly storage: AngularFireStorage) {
    this.itemsCollection = afs.collection<any>(this.pathIP)
    this.urlImage = new Observable<string>();
    this.pdfCV = new Observable<string>();
    this.id = Math.random().toString(36).substring(2)

  }

  getInfoPersonal(){
    this.itemsCollection = this.afs.collection<any>(this.pathIP)
    return this.itemsCollection.valueChanges().pipe(map(datosIP =>{
      return datosIP;
    }))
  }

  public cargarFormInfoPerson(infoPersonal: any, imagenCapturada: any,  pdfCVCapturado: any,){

    const filePath = `img/img_${this.id}`
    const task = this.storage.upload(filePath, imagenCapturada);
    this.espera = true;

    task.snapshotChanges().pipe(finalize( ()=>{
      this.urlImage = this.storage.ref(filePath).getDownloadURL()
      this.urlImage.subscribe((url)=>{
        infoPersonal.imagen = url
        this.cargarPdfCV(pdfCVCapturado, infoPersonal)
      }, error => this.mensajeError = error)
    })).subscribe()
  }

  private cargarPdfCV(pdfCVCapturado: any, infoPersonal: any): any{
    const filePath = `file/pdf_${this.id}`
    const fileRefPdf = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, pdfCVCapturado);
    task.snapshotChanges().pipe(finalize( ()=>{
      this.pdfCV = fileRefPdf.getDownloadURL()
      this.pdfCV.subscribe((url)=>{
        infoPersonal.pdfCV = url
        infoPersonal.uid = this.authService.usuario.uid
        this.itemsCollection.add(infoPersonal).then()
        this.espera = false;
        this.cargado = true;
      }, error => this.mensajeError = error)
    })).subscribe()
  }
}
