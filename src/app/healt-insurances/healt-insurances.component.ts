import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HealtInsurancesDataSource } from './healt-insurances-datasource';

@Component({
  selector: 'healt-insurances',
  templateUrl: './healt-insurances.component.html',
  styleUrls: ['./healt-insurances.component.css']
})
export class HealtInsurancesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HealtInsurancesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new HealtInsurancesDataSource(this.paginator, this.sort);
  }
}
