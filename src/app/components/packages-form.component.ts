import { Component, OnInit } from '@angular/core';
import { Package } from '../models/Package';
import { Receiver } from '../models/Receiver';
import { Sender } from '../models/Sender';
import { PackageService } from '../services/package.service';
import { ReceiverService } from '../services/receiver.service';
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-packages-form',
  templateUrl: '../views/packages-form.component.html',
  styleUrls: ['../views/packages-form.component.css']
})
export class PackagesFormComponent implements OnInit {

  sender: Sender = new Sender();
  senderId: Number;
  receiver: Receiver = new Receiver();
  receiverId: Number;
  package: Package = new Package();


  constructor(private senderService: SenderService,
              private receiverService: ReceiverService,
              private packageService: PackageService) { }

  ngOnInit(): void {
  }

  findSender(id: Number){
    console.log(id);
    this.senderService.getSenderById(id).subscribe(
      (sender) => {this.sender = sender;
                  this.senderId = id}
    )
  }

  findReceiver(id: Number){
    console.log(id);
    this.receiverService.getReceiverById(id).subscribe(
      (receiver) => {this.receiver = receiver;
                     this.receiverId = id}
    )
  }

  sendPackage(){
      this.package.destinatario = this.receiverId;
      this.package.remitente = this.senderId;
      this.packageService.create(this.package).subscribe(
        ()=>{}
      )
      console.log("sending package");
      
  }

}
