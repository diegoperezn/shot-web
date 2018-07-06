import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PatientService } from '../patient.service';

// TODO: Replace this with your own data model type
export interface PatientsItem {
  nombre: string;
  documento: number;
}

// TODO: replace this with real data from your application


/**
const EXAMPLE_DATA: PatientsItem[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},

];

 * Data source for the Patients view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PatientsDataSource extends DataSource<PatientsItem> {
  
  data: PatientsItem[];
  next: string;
  prev: string;
  total: number;

  private heroesUrl = 'http://localhost:8080/pacientes'; 

  constructor(private paginator: MatPaginator, private sort: MatSort, private service: PatientService) {
    super();
    this.service.getPatients().subscribe(patients => this.buildResult(patients)); 
  }

  buildResult(result: any) {
    this.data = result._embedded.pacientes;
    this.next = result._links.next != null ? result._links.next.href : null;
    this.prev = result._links.prev != null ? result._links.prev.href : null;
    this.total = result.page.totalElements;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PatientsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.total;

    console.log("connect: " + this.data);

    return merge(...dataMutations).pipe(map(() => {
      return this.getData();
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

   /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  public setPagedData(event: PageEvent) {
    console.log (event);
    if (event.previousPageIndex < event.pageIndex) {
      this.service.getPatientsPage(this.next).subscribe(patients => this.buildResult(patients));
    } else {
      this.service.getPatientsPage(this.prev).subscribe(patients => this.buildResult(patients));
    }
    
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getData() {
    return this.data
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PatientsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.nombre, b.nombre, isAsc);
        case 'id': return compare(+a.documento, +b.documento, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
