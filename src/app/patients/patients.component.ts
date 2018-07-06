import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PatientsDataSource } from './patients-datasource';

import { PatientService } from '../patient.service';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: PatientsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private service: PatientService) { }

  ngOnInit() {
    this.dataSource = new PatientsDataSource(this.paginator, this.sort, this.service);
  }

  onPageChange(event: PageEvent) {
    this.dataSource.setPagedData(event);
  }

  onRowClick(event: any) {
    console.log(event);
  }  
}
