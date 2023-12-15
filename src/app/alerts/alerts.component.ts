import { Component, inject, Input } from '@angular/core';
import { ClearMessageService } from "../services/clear-message.service";

@Component({
  selector: 'app-alerts',
  standalone: true,
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
// @Input('read') isRead: boolean;
  private messageService?: ClearMessageService;

  constructor() {
    this.messageService = inject(ClearMessageService);
  }


}
