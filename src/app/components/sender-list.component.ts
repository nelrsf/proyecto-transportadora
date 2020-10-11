import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Sender } from '../models/Sender';
import { SenderService } from '../services/sender.service';
import { Router, RouterModule } from '@angular/router'
import { GLOBAL } from '../services/global';



@Component({
  selector: 'app-sender-list',
  templateUrl: '../views/sender-list.component.html'
})
export class SendersListComponent implements OnInit {

  senders: Sender[];
  sender: Sender;
  msg: string="no hay link";

  constructor(private senderService: SenderService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getSenders();
  }

  getSenders(){
    this.senderService.getSenders().subscribe(
      (senders) => {this.senders = senders}
    )
    this.msg=GLOBAL.url;
  }

  getSender(id:Number){
    this.senderService.getSenderById(id).subscribe(
      (sender) => {this.sender = sender}
    )
  }

  deleteSender(id: Number){
    this.senderService.delete(id).subscribe(
      () => { this.getSenders()}
    )
  }

  updateFormSender(id: Number){
    console.log(this.sender);
    this.router.navigate(['/sender-form-update'],{queryParams: {sender_id: id}});
  }

}
