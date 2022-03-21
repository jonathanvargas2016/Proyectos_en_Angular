import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";
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
    return this.itemsCollection.snapshotChanges().pipe(map(document => {
      return document.reverse();
    }))

  }

  // public cargarFormInfoPerson(infoPersonal: any, imagenCapturada: any,  pdfCVCapturado: any, forma: any){
  //
  //   const filePath = `img/img_${this.id}`
  //   const task = this.storage.upload(filePath, imagenCapturada);
  //   this.espera = true;
  //   task.snapshotChanges().pipe(finalize( ()=>{
  //     this.urlImage = this.storage.ref(filePath).getDownloadURL()
  //     this.urlImage.subscribe((url)=>{
  //       infoPersonal.imagen = url
  //       infoPersonal.pathImg = filePath
  //       this.cargarPdfCV(pdfCVCapturado, infoPersonal, forma)
  //     }, error => {
  //       this.espera = false;
  //       this.cargado = false;
  //       this.mensajeError = error.message
  //     })
  //   })).subscribe()
  // }

  // private cargarPdfCV(pdfCVCapturado: any, infoPersonal: any, forma: any): any{
  //   const filePath = `file/pdf_${this.id}`
  //   const fileRefPdf = this.storage.ref(filePath)
  //   const task = this.storage.upload(filePath, pdfCVCapturado);
  //   task.snapshotChanges().pipe(finalize( ()=>{
  //     this.pdfCV = fileRefPdf.getDownloadURL()
  //     this.pdfCV.subscribe((url)=>{
  //       infoPersonal.pdfCV = url
  //       infoPersonal.pathPdf = filePath
  //       infoPersonal.uid = this.authService.usuario.uid
  //       this.itemsCollection.add(infoPersonal).then(() =>{
  //         this.espera = false;
  //         this.cargado = true;
  //         forma.reset()
  //
  //       }).catch(error =>{
  //         this.mensajeError = error.message
  //         this.espera = false;
  //         this.cargado = false;
  //         this.storage.storage.ref(`img/img_${this.id}`).delete().then()
  //         this.storage.storage.ref(`file/pdf_${this.id}`).delete().then()
  //       })
  //
  //     }, error => this.mensajeError = error.message)
  //   })).subscribe()
  // }

  // async eliminarInfoPersonal(id: string, pathImg: string, pathPdf: string){
  //     await this.storage.storage.ref(pathImg).delete()
  //     await this.storage.storage.ref(pathPdf).delete()
  //     await this.itemsCollection.doc(id).delete()
  // }

  async eliminarInfoPersonal(id: string){
    try {
      await this.itemsCollection.doc(id).delete()
      return true;
    }catch (e) {
      return false;
    }
  }

  getdocumentInfoPersonal(id: string){
    return this.itemsCollection.doc(id).valueChanges()
  }

  async cargarFormInfoPerson(infoPersonal: any){
    infoPersonal.uid = this.authService.usuario.uid
    this.espera = true;
    let seGraboInfo: boolean = false
    try {
      await this.itemsCollection.add(infoPersonal)
      seGraboInfo = true
    }catch (e) {
      this.espera = false
      this.cargado = false
      seGraboInfo = false
    }
    if(seGraboInfo){
      this.espera = false
      this.cargado = true
      setTimeout(()=>{
        this.cargado = false
      }, 3000)
    }
    return seGraboInfo
  }

  async actualizarInfoPersonal(documentId: string, infoPersonal: any){
    try {
      await this.itemsCollection.doc(documentId).update(infoPersonal)
      return true
    }catch (e) {
      return false
    }
  }
}
