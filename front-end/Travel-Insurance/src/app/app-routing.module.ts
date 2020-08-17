import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { CountryPackageComponent } from './country-package/country-package.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'payment', component: TransactionDetailComponent },
  { path: 'countrypackage', component: CountryPackageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
