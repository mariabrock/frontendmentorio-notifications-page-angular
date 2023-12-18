import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClearMessageService {
  private boolSource = new BehaviorSubject<boolean>(false);
  currentBool$ = this.boolSource.asObservable();


  constructor() {
    this.currentBool$.subscribe();
  }

  emitBoolean(bool: boolean) {
    this.boolSource.next(bool);
    console.log('bool:', bool);
  }


}
