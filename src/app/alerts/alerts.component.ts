import { Component, inject, Input } from '@angular/core';
import { ClearMessageService } from "../services/clear-message.service";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-alerts',
  standalone: true,
  templateUrl: './alerts.component.html',
  imports: [
    NgClass,
    RouterLink
  ],
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  public messageService = inject(ClearMessageService);
  test = this.messageService._isRead();
  notifBackground = 'new';
  iconDisplay = 'show';
  notifNumber = 'blue';

  number= '3';



  constructor() {
    console.log(this.test)
  }

  markAsRead($event: any) {
    this.messageService.set();
    this.notifBackground = 'old';
    this.iconDisplay = 'hidden';
    this.number = '0';
    this.notifNumber = 'white';

  }

}
