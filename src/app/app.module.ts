import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
    MatCardModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { PatientsComponent } from './patients/patients.component';
import { MyNavComponent } from './my-nav/my-nav.component';

import { RouterModule, Routes } from '@angular/router';
import { HealtInsurancesComponent } from './healt-insurances/healt-insurances.component';

import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'healtInsurance', component: HealtInsurancesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    MyNavComponent,
    HealtInsurancesComponent
  ],
  imports: [
    HttpClientModule,  
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
