import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClearMessageService {
  public  _isRead = signal(false);


  constructor() {
  }

  set(): boolean {
    console.log(!this._isRead() ? true: false);
    return!this._isRead() ? true: false;
  }

}
