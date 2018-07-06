import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PatientsItem } from './patients/patients-datasource';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

	private heroesUrl = 'http://localhost:8080/pacientes'; 

  constructor(private http: HttpClient) { }

  getPatients(): Observable<PatientsItem[]> {
  	console.log(this.heroesUrl);
 		return this.http.get<PatientsItem[]>(this.heroesUrl);
	}

	getPatientsPage(page: string): Observable<PatientsItem[]> {
  	console.log(page);
 		return this.http.get<PatientsItem[]>(page);
	}

	deleteByPath(link: string): void {
		this.http.delete(link);
	}

}
