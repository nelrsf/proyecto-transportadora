import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router'
import { GLOBAL } from '../services/global';
import { Receiver } from '../models/Receiver';
import { ReceiverService } from '../services/receiver.service';



@Component({
  selector: 'app-receiver-list',
  templateUrl: '../views/receiver-list.component.html',
  styleUrls: ['../views/receiver-list.component.css']
})
export class ReceiversListComponent implements OnInit {

  receivers: Receiver[];
  receiver: Receiver;
  msg: string="no hay link";

  constructor(private receiverService: ReceiverService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getReceivers();
  }

  getReceivers(){
    this.receiverService.getReceivers().subscribe(
      (receivers) => {this.receivers = receivers}
    )
    this.msg=GLOBAL.url;
  }

  getReceiver(id:Number){
    this.receiverService.getReceiverById(id).subscribe(
      (receiver) => {this.receiver = receiver}
    )
  }

  deleteReceiver(id: Number){
    this.receiverService.delete(id).subscribe(
      () => { this.getReceivers()}
    )
  }

  updateFormReceiver(id: Number){
    this.router.navigate(['/receiver-form-update'],{queryParams: {receiver_id: id}});
  }

}
