import { Component, OnInit } from '@angular/core';
import { Sender } from '../models/Sender';
import { SenderService } from '../services/sender.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-sender-form',
  templateUrl: '../views/sender-form.component.html'
})
export class SenderFormComponent implements OnInit {
  
  public sender: Sender;
  public senders: Sender[];

  constructor(private senderService: SenderService, private router: Router) {
    this.sender = new Sender();
   }

  ngOnInit(): void {
  
  }

  create(){
    this.senderService.create(this.sender).subscribe(
      (sender) => {this.sender = sender;
                   this.router.navigate(['/senders-list'])}
    )
  }

}
