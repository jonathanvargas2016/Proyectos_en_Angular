import { Injectable } from '@angular/core';
import {FileItem} from "../Modelos/FileItem";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {AngularFirestoreCollection} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CargarArchivosService {
  private itemsCollection: AngularFirestoreCollection<any>
  id: string
  cargando: boolean
  uploadPercent: Observable<number | undefined>;
  archivos: FileItem[] = []
  downloadURL: Observable<string>;
  constructor(private readonly storage: AngularFireStorage,
              private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('Imagenes')
  }

  cargarImagenes(imagenes: FileItem[]){
    this.archivos = imagenes
    for (const imagen of this.archivos){
      this.id = Math.random().toString(36).substring(2)
      const path = `img/img_${this.id}`
      imagen.path = path
      imagen.estaSubiendo = true
      if(imagen.progreso >= 100){
        continue;
      }
      const task = this.storage.upload(path, imagen.archivo)
      this.uploadPercent = task.percentageChanges()
      this.uploadPercent.subscribe((progreso:any)=>{
        imagen.progreso = progreso
        this.cargando = true
        console.log("progreso ******* ",imagen.progreso)
      })

      task.snapshotChanges().pipe(finalize(()=>{
        this.cargando = false
        this.downloadURL = this.storage.ref(path).getDownloadURL()
        this.downloadURL.subscribe((url)=>{
          imagen.url = url
          imagen.estaSubiendo = false
          const imagenAGuardar = {
            nombre: imagen.nombreArchivo,
            url: imagen.url,
            path: imagen.path
          }
          this.itemsCollection.add(imagenAGuardar).then((resp)=>{

          }).catch(()=>{})

        })
      })).subscribe()
    }
  }

  getImagenes(){
    return this.itemsCollection.snapshotChanges().pipe(map(document => {
      return document.reverse();
    }))
  }
  async eliminarImagen(id: string, path: string){
    try {
      await this.itemsCollection.doc(id).delete()
      await this.storage.storage.ref(path).delete()
      return true
    }catch (e) {
      return false
    }
  }
}
