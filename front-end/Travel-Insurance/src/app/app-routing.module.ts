import { UsersDetailComponent } from './users-detail/users-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { CountryPackageComponent } from './country-package/country-package.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/countrypackage', pathMatch: 'full'},
  { path: 'transactiondetail', component: TransactionDetailComponent },
  { path: 'countrypackage', component: CountryPackageComponent },
  { path: 'userdetail', component: UsersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
