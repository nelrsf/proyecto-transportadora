import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Sender } from '../models/Sender';
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-sender-form-update',
  templateUrl: '../views/sender-form-update.component.html'
})
export class SenderFormUpdateComponent implements OnInit {

  public sender: Sender;
  id: Number;
  sub: any;

  constructor(private route: ActivatedRoute, private senderService: SenderService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams
               .subscribe(params => {
                   this.id = +params['sender_id'];
                   this.senderService.getSenderById(this.id).subscribe(
                     (sender) => this.sender = sender
                   )
               });
  }

  updateSender(){
    this.senderService.update(this.id, this.sender).subscribe(
       ()=>{this.router.navigate(['/senders-list'])}
    )
  }

}
