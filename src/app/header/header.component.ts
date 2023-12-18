import { Component, OnInit } from '@angular/core';
import { ClearMessageService } from "../services/clear-message.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public bool?:boolean;

  public isRead: Observable<boolean> = this.messageService.currentBool$;

  constructor(private messageService: ClearMessageService) {}

  ngOnInit() {
    this.isRead.subscribe(bool => this.bool = bool)
    console.log(this.isRead);
  }

  markAsRead() {

    console.log(this.isRead);
  }


}
