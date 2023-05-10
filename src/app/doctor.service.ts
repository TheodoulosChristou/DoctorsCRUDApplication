import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './models/doctor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { 

  }

  getAllDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>('https://localhost:7263/api/Doctor');
  }

  addDoctor(doctor:Doctor): Observable<Doctor[]>{
    return this.http.post<Doctor[]>('https://localhost:7263/api/Doctor',doctor);
  }

  deleteDoctor(id:number):Observable<Doctor[]>{
    return this.http.delete<Doctor[]>('https://localhost:7263/api/Doctor/'+id);
  }

  updateDoctor(doctor:Doctor):Observable<Doctor[]> {
    return this.http.put<Doctor[]>('https://localhost:7263/api/Doctor',doctor);
  }
}
