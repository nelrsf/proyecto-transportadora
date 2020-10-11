import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/Driver';
import { Package } from '../models/Package';
import { Receiver } from '../models/Receiver';
import { Sender } from '../models/Sender';
import { DriverService } from '../services/driver.service';
import { PackageService } from '../services/package.service';
import { ReceiverService } from '../services/receiver.service';
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-package-list',
  templateUrl: '../views/package-list.component.html'
})
export class PackageListComponent implements OnInit {

  _packages: Package[];
  sender: Sender = new Sender();
  receiver: Receiver = new Receiver();
  senders: Sender[] = [];
  receivers: Receiver[] = [];
  driver: Driver;
  drivers: Driver[] = [];

  constructor(private packageService: PackageService,
            private senderService: SenderService,
            private receiverService: ReceiverService,
            private driverService: DriverService) { }


  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(){
    this.packageService.getPackages().subscribe(
      (packages)=>{this._packages = packages; this.mapPackages()}
    )
  }

  mapPackages(){
     this._packages.forEach((element, index) => {
        this.senderService.getSenderById(element.remitente).subscribe(
          (sender) => {this.sender = sender;
            this.senders[index] = this.sender;
          }
        )
        this.driverService.getDriverById(element.conductor).subscribe(
          (driver) => {this.driver = driver;
            this.drivers[index] = this.driver;
          }
        )
        this.receiverService.getReceiverById(element.destinatario).subscribe(
          (receiver) => {this.receiver = receiver;
            this.receivers[index] = this.receiver;}
        )
     });
  }

  deletePackage(id:Number){
      this.packageService.delete(id).subscribe(
        ()=>{this.getPackages()}
      )
  }

}
