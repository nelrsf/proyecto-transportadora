import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Driver } from '../models/Driver';
import { DriverService } from '../services/driver.service';


@Component({
  selector: 'app-driver-form',
  templateUrl: '../views/driver-form.component.html'
})
export class DriverFormComponent implements OnInit {
  
  public driver: Driver;
  public drivers: Driver[];

  constructor(private driverService: DriverService, private router: Router) {
    this.driver = new Driver();
   }

  ngOnInit(): void {
  
  }

  create(){
    console.log(this.driver)
    this.driverService.create(this.driver).subscribe(
      (driver) => {this.driver = driver;
                   this.router.navigate(['/drivers-list'])}
    )
  }

}
