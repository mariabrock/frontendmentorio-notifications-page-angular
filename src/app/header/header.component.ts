import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isRead = false;

  public handleClick() {
    this.isRead = !this.isRead;
    console.log(this.isRead)
  };

}
