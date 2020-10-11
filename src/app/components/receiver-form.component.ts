import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Receiver } from '../models/Receiver';
import { ReceiverService } from '../services/receiver.service';


@Component({
  selector: 'app-receiver-form',
  templateUrl: '../views/receiver-form.component.html'
})
export class ReceiverFormComponent implements OnInit {
  
  public receiver: Receiver;
  public receivers: Receiver[];

  constructor(private receiverService: ReceiverService, private router: Router) {
    this.receiver = new Receiver();
   }

  ngOnInit(): void {
  
  }

  create(){
    this.receiverService.create(this.receiver).subscribe(
      (receiver) => {this.receiver = receiver;
                   this.router.navigate(['/receivers-list'])}
    )
  }

}
