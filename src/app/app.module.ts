import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SendersListComponent } from './components/sender-list.component';
import { SenderFormComponent } from './components/sender-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SenderFormUpdateComponent } from './components/sender-form-update.component';
import { ReceiversListComponent } from './components/receiver-list.component';
import { ReceiverFormComponent } from './components/receiver-form.component';
import { ReceiverFormUpdateComponent } from './components/receiver-form-update.component';
import { PackagesFormComponent } from './components/packages-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SendersListComponent,
    SenderFormComponent,
    SenderFormUpdateComponent,
    ReceiversListComponent,
    ReceiverFormComponent,
    ReceiverFormUpdateComponent,
    PackagesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
