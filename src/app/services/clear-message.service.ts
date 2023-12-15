import { Injectable, Output } from '@angular/core';
import EventEmitter from "events";

@Injectable({
  providedIn: 'root'
})
export class ClearMessageService {
  @Output() readEvent = new EventEmitter();

  public isRead = false;

  constructor() { }

  emitBool() {
    this.isRead = !this.isRead;
    this.readEvent.emit(this.isRead.toString());
    console.log(this.isRead);
  }
}
