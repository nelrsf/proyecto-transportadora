import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderFormUpdateComponent } from './components/sender-form-update.component';
import { SenderFormComponent } from './components/sender-form.component';
import { SendersListComponent } from './components/sender-list.component';

const routes: Routes = [
  {path: 'senders-list', component: SendersListComponent},
  {path: 'sender-form', component: SenderFormComponent},
  {path: 'sender-form-update', component: SenderFormUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
