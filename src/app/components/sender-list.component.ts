import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Sender } from '../models/Sender';
import { SenderService } from '../services/sender.service';
import { Router, RouterModule } from '@angular/router'



@Component({
  selector: 'app-users-list',
  templateUrl: '../views/sender-list.component.html',
  styleUrls: ['../views/sender-list.component.css']
})
export class SendersListComponent implements OnInit {

  senders: Sender[];
  sender: Sender;

  constructor(private senderService: SenderService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getSenders();
  }

  getSenders(){
    this.senderService.getSenders().subscribe(
      (senders) => {this.senders = senders}
    )
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
