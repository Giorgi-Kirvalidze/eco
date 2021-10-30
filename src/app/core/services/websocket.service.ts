import {Injectable, OnInit} from "@angular/core";
import io from 'socket.io-client';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class WebsocketService{
  socket: any;
  readonly url : string = 'ws://localhost:5000';
  idSubject = new Subject<any>()

  constructor() {
    this.socket = io(this.url);
    this.socket.on('connect',()=>{
        this.idSubject.next(this.socket.id);
    })
  }


  listen(eventName: string) {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data)
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

}
