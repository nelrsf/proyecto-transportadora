import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Driver } from '../models/Driver';
import { DriverService } from '../services/driver.service';


@Component({
  selector: 'app-driver-form-update',
  templateUrl: '../views/driver-form-update.component.html'
})
export class DriverFormUpdateComponent implements OnInit {

  public driver: Driver;
  id: Number;
  sub: any;

  constructor(private route: ActivatedRoute, private driverService: DriverService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams
               .subscribe(params => {
                   this.id = +params['driver_id'];
                   this.driverService.getDriverById(this.id).subscribe(
                     (driver) => this.driver = driver
                   )
               });
  }

  updateDriver(){
    this.driverService.update(this.id, this.driver).subscribe(
       ()=>{this.router.navigate(['/drivers-list'])}
    )
  }

}
