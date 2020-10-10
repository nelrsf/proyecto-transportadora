import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Receiver } from '../models/Receiver';
import { ReceiverService } from '../services/receiver.service';


@Component({
  selector: 'app-receiver-form-update',
  templateUrl: '../views/receiver-form-update.component.html',
  styleUrls: ['../views/receiver-form-update.component.css']
})
export class ReceiverFormUpdateComponent implements OnInit {

  public receiver: Receiver;
  id: Number;
  sub: any;

  constructor(private route: ActivatedRoute, private receiverService: ReceiverService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams
               .subscribe(params => {
                   this.id = +params['receiver_id'];
                   this.receiverService.getReceiverById(this.id).subscribe(
                     (receiver) => this.receiver = receiver
                   )
               });
  }

  updateReceiver(){
    this.receiverService.update(this.id, this.receiver).subscribe(
       ()=>{this.router.navigate(['/receivers-list'])}
    )
  }

}
