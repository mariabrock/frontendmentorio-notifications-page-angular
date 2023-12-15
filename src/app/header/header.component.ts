import { Component, inject, Output } from '@angular/core';
import { ClearMessageService } from "../services/clear-message.service";
import EventEmitter from "events";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() readEvent = new EventEmitter();

  private messageService?: ClearMessageService;
  public isRead = false;

  constructor() {
    this.messageService = inject(ClearMessageService);
  }

  emitBool() {
    this.isRead = !this.isRead;
    this.readEvent.emit(this.isRead.toString());
    console.log(this.isRead);
  }

}
