import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje = '';
  elemento: any;
  constructor(public _cs: ChatService) {
    this._cs.cargarMensaje().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }
  enviarMensaje(): any{
    if (this.mensaje.length === 0){
      return;
    }else{
      this._cs.agregarMensaje(this.mensaje)
        .then(() => this.mensaje = '')
        .catch((err) => console.error('error al enviar', err));
    }
  }

}
