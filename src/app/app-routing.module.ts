import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorEditComponent } from './doctors/doctor-edit/doctor-edit.component';

const routes: Routes = [
  {
    path:'', 
    component:DoctorsComponent
  },
  {
    path:'doctors', 
    component:DoctorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
