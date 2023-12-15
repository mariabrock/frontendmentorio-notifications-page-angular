import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { FooterComponent } from "./footer/footer.component";
import EventEmitter from "events";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AlertsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notifications-page';
  @Input() readEvent = new EventEmitter();

  receiveBool($event: boolean) {
    this.readEvent = $event
  }
}
