import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../models/Driver';
import { Package } from '../models/Package';
import { Receiver } from '../models/Receiver';
import { Sender } from '../models/Sender';
import { DriverService } from '../services/driver.service';
import { PackageService } from '../services/package.service';
import { ReceiverService } from '../services/receiver.service';
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-packages-form',
  templateUrl: '../views/packages-form.component.html'
})
export class PackagesFormComponent implements OnInit {

  sender: Sender = new Sender();
  senderId: Number;
  receiver: Receiver = new Receiver();
  receiverId: Number;
  driver: Driver = new Driver();
  driverId: Number;
  package: Package = new Package();


  constructor(private senderService: SenderService,
              private receiverService: ReceiverService,
              private driverService: DriverService,
              private packageService: PackageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  findSender(id: Number){
    console.log(id);
    this.senderService.getSenderById(id).subscribe(
      (sender) => {this.sender = sender;
                  this.senderId = id}
    )
  }

  findDriver(id: Number){
    console.log(id);
    this.driverService.getDriverById(id).subscribe(
      (driver) => {this.driver = driver;
                  this.driverId = id}
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
      this.package.conductor = this.driverId;
      this.packageService.create(this.package).subscribe(
        ()=>{this.router.navigate(['/packages-list'])}
      )
      console.log("sending package");
      
  }

}
