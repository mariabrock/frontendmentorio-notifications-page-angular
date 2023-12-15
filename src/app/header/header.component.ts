import { Component, inject } from '@angular/core';
import { ClearMessageService } from "../services/clear-message.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private messageService?: ClearMessageService;

  constructor() {
    this.messageService = inject(ClearMessageService);
  }

}
