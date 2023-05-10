import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './doctor.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorEditComponent } from './doctors/doctor-edit/doctor-edit.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DoctorsComponent,
    DoctorsListComponent,
    DoctorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
