import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor.service';
import { Doctor } from 'src/app/models/doctor.model';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
  providers:[MessageService, ConfirmationService]
})
export class DoctorsListComponent implements OnInit {
  doctors:Doctor[] = [];

  displayDoctorDialog:boolean = false;

  value:string = '';

  selectedDoctor: any = null;

  constructor(private doctorService:DoctorService, private messageService:MessageService, private confirmationService:ConfirmationService){
    
  }

  fetchDoctors(){
    this.doctorService.getAllDoctors().subscribe(
      (response:Doctor[])=>{
        this.doctors = response;
      }
    ), (error:any) => {
      catchError(error);
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.fetchDoctors();
  }

  showDialog() {
    this.displayDoctorDialog = true;
    this.selectedDoctor = null;
  }

  closeModal(isClosed:boolean){
    this.displayDoctorDialog = !isClosed;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor Added' });
  }

  deleteDoctor(id:number){
    this.confirmationService.confirm({
      message:'Are you sure that you want to proceed?',
      header:'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:() =>{
        this.doctorService.deleteDoctor(id).subscribe(
          (response:Doctor[]) => {
            this.doctors = response;
          }
        ), (error:any) => {
          catchError(error);
          console.log(error);
        }
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have Deleted the Doctor with ID ' + id });
        this.confirmationService.close();
      }, reject:(type:any)=>{
        switch (type) {
          case ConfirmEventType.REJECT:
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected to Delete the Doctor with ID ' +id });
              break;
          case ConfirmEventType.CANCEL:
              this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled to Delete the Doctor with ID ' + id });
              break;
        }
        this.confirmationService.close();
      }
    });
  }

  editDoctor(doctor:Doctor){
    this.displayDoctorDialog = true;
    this.selectedDoctor = doctor;
  }

  closeEditModal(isClosed:boolean){
    this.displayDoctorDialog = !isClosed;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor Updated Successfully' });
  }
}
