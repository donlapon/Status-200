import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CountryPackageComponent } from './country-package/country-package.component';
// import { PaymentComponent } from './payment/payment.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
// import { InsurancePremiumComponent } from './insurance-premium/insurance-premium.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { ShowUserDetailComponent } from './show-user-detail/show-user-detail.component';


import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './model/format-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    CountryPackageComponent,
    // PaymentComponent,
    UsersDetailComponent,
    // InsurancePremiumComponent,
    TransactionDetailComponent,
    ShowUserDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [ {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}],
  bootstrap: [AppComponent],
})
export class AppModule {}
