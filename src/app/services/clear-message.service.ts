import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClearMessageService {
  public  _isRead = signal(false);

  constructor() {
  }

  setBoolean() {
    this._isRead.set(true);
    console.log(this._isRead);
  }

}

// console.log(this._isRead);
// // return !this._isRead() ? true: false;
// if(this._isRead()) {
//   this._isRead() = true;
//   console.log(!this._isRead);
// }
