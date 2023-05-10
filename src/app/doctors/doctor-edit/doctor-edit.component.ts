import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { DoctorService } from 'src/app/doctor.service';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit, OnChanges {

  @Output() doctorList = new EventEmitter<Doctor[]>;

  @Output() clickClose = new EventEmitter;

  @Output() clickCloseEdit = new EventEmitter;

  @Input() selectedDoctor:any = null;
  

  constructor(private fb:FormBuilder, private doctorService:DoctorService){

  }

  doctorForm = this.fb.group( {
    firstName:["", Validators.required],
    surname:["", Validators.required],
    age:['', Validators.required]
  })

  
  ngOnInit(): void {
  }

  addUpdateDoctor(){
    if(this.selectedDoctor === null){
      let doctor:Doctor = {
        firstName:this.doctorForm.value.firstName,
        surname: this.doctorForm.value.surname,
        age: this.doctorForm.value.age
      }
  
      this.doctorService.addDoctor(doctor).subscribe(
        (doctors:Doctor[]) =>{
          this.doctorList.emit(doctors);
          this.doctorForm.reset();
          this.clickClose.emit(true);
        }
      ), (error:any) => {
        catchError(error);
        console.log(error);
      }
    } else {
      let doctor:Doctor = {
        id:this.selectedDoctor.id,
        firstName:this.doctorForm.value.firstName,
        surname:this.doctorForm.value.surname,
        age:this.doctorForm.value.age
      }

      this.doctorService.updateDoctor(doctor).subscribe(
        (doctors:Doctor[]) =>{
          this.doctorList.emit(doctors);
          this.doctorForm.reset();
          this.clickCloseEdit.emit(true);
        }
      ), (error:any) => {
        catchError(error);
        console.log(error);
      }
    } 
  }

  ngOnChanges(): void {
    if(this.selectedDoctor){
      this.doctorForm.patchValue(this.selectedDoctor)
    } else {
      this.doctorForm.reset();
    }
  }
}
