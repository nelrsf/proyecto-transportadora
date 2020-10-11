import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderFormUpdateComponent } from './components/sender-form-update.component';
import { SenderFormComponent } from './components/sender-form.component';
import { SendersListComponent } from './components/sender-list.component';
import { ReceiversListComponent } from './components/receiver-list.component';
import { ReceiverFormComponent } from './components/receiver-form.component';
import { ReceiverFormUpdateComponent } from './components/receiver-form-update.component';
import { PackagesFormComponent } from './components/packages-form.component';
import { PackageListComponent } from './components/package-list.component';
import { DriversListComponent } from './components/driver-list.component';
import { DriverFormComponent } from './components/driver-form.component';
import { DriverFormUpdateComponent } from './components/driver-form-update.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {path: 'senders-list', component: SendersListComponent},
  {path: 'sender-form', component: SenderFormComponent},
  {path: 'sender-form-update', component: SenderFormUpdateComponent},
  {path: 'receivers-list', component: ReceiversListComponent},
  {path: 'receiver-form', component: ReceiverFormComponent},
  {path: 'receiver-form-update', component: ReceiverFormUpdateComponent},
  {path: 'package-form', component: PackagesFormComponent},
  {path: 'packages-list', component: PackageListComponent},
  {path: 'drivers-list', component: DriversListComponent},
  {path: 'driver-form', component: DriverFormComponent},
  {path: 'driver-form-update', component: DriverFormUpdateComponent},
  {path: 'intro', component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
