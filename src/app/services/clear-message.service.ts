import { Injectable, Output } from '@angular/core';
import EventEmitter from "events";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClearMessageService {
  private boolSource = new BehaviorSubject<boolean>(false);
  currentBool = this.boolSource.asObservable();

  public isRead = false;

  constructor() { }

  emitBool() {
    this.isRead = !this.isRead;
    this.readEvent.emit(this.isRead.toString());
    console.log(this.isRead);
  }

}
