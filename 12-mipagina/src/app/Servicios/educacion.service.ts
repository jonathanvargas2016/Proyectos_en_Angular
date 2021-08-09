import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private itemsCollection: AngularFirestoreCollection<any>;
  pathEdu = 'educacion';
  uploadPercent: Observable<number | undefined>;
  espera = false;
  cargado = false;
  mensajeError: any;
  constructor(private readonly afs: AngularFirestore,
              public readonly authService: AuthService,
              private readonly storage: AngularFireStorage) {
    this.itemsCollection = afs.collection<any>(this.pathEdu)
    this.uploadPercent = new Observable<number | undefined>();
  }

  public cargarFormEducacion(tituloCapturado: any, educacion: any){
    const id = Math.random().toString(36).substring(2) //id random para titulo img
    const filePath = `img/title_${id}` // path de la img
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, tituloCapturado); // subo la img al storage
    this.uploadPercent = task.percentageChanges(); // porcentaje de carga

    this.espera = true; // aparece sms de espera
    this.uploadPercent.subscribe( // imprimir porcentaje de carga
      value => {},
        error => this.mensajeError = error)

    task.snapshotChanges().pipe(finalize( () =>{ // una vez q se sube la img procedemos a cargar el form
      const observableUrl = fileRef.getDownloadURL(); // obtiene la url
      observableUrl.subscribe(url =>{ // suscripcion
        educacion.img = url;
        educacion.uid = this.authService.usuario.uid
        this.itemsCollection.add(educacion).then()
        this.cargado = true;
        this.espera = false;
      }, error => this.mensajeError = error)
    })).subscribe();
  }


  /*cargarImagenTitulo(tituloCapturado: any, educacion: any){
    this.id = Math.random().toString(36).substring(2)
    const storageRef = firebase.storage().ref()
    const filePath = `img/title_${this.id}`
    const uploadTask = storageRef.child(filePath).put(tituloCapturado);
    this.espera = true;

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      ((snapshot) =>{
        this.uploadPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        console.log('Upload is ' + this.uploadPercent + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }

      }),
      (error) => this.mensajeError = error.message,
      () =>{
        console.log("Img cargada correctamente")

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          educacion.img = url;
          educacion.uid = this.authService.usuario.uid
          this.guardarFirebase(educacion)
          this.espera = false;
          this.cargado = true;
        })
      }
    )
  }

  guardarFirebase(educacion: any){
    this.afs.collection(this.pathEdu).add(educacion).then();

  }*/



}
