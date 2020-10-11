import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router'
import { GLOBAL } from '../services/global';
import { Driver } from '../models/Driver';
import { DriverService } from '../services/driver.service';



@Component({
  selector: 'app-driver-list',
  templateUrl: '../views/driver-list.component.html'
})
export class DriversListComponent implements OnInit {

  drivers: Driver[];
  driver: Driver;
  msg: string="no hay link";

  constructor(private driverService: DriverService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(){
    this.driverService.getDrivers().subscribe(
      (drivers) => {this.drivers = drivers}
    )
    this.msg=GLOBAL.url;
  }

  getDriver(id:Number){
    this.driverService.getDriverById(id).subscribe(
      (driver) => {this.driver = driver}
    )
  }

  deleteDriver(id: Number){
    this.driverService.delete(id).subscribe(
      () => { this.getDrivers()}
    )
  }

  updateFormDriver(id: Number){
    console.log(this.driver);
    this.router.navigate(['/driver-form-update'],{queryParams: {driver_id: id}});
  }

}
