import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserDetail } from './../model/user-detail';
import { InsuredInfo } from './../model/insured-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetail: UserDetail[] = [];

  constructor(private http: HttpClient) { }

  postUserDetail(insuredInfo): Observable<InsuredInfo[]>{
   const user1 = new InsuredInfo('destinationCountry',
                                  'packageName',
                                  '2020-08-18',
                                  '2020-08-18',
                                  0,
                                  0,
                                  'idNumber',
                                  'titleName',
                                  'firstname',
                                  'lastname',
                                  '2020-08-18',
                                  'beneficiaryName',
                                  'phoneNumber',
                                  'email');
  //  const user2 = new UserDetail('Mrs', 'llll', 'oooo', 'llllll', '12/06/1997', 'gggg llll', 1);
  //  const user3 = new UserDetail('mr', 'pppp', 'iiii', 'llllll', '12/06/1997', 'gggg llll', 1);
   return this.http.post<InsuredInfo[]>('http://167.99.70.167:8080/api/v1/insuredInfo', user1);

  //  return of([user1, user2, user3]);
  }

  // makeFromUserDetail(userDetail: UserDetail): FormData{
  //   const formData = new FormData();
  //   formData.append('title', userDetail.title);
  //   formData.append('firstName', userDetail.firstName);
  //   formData.append('lastName', userDetail.lastName);
  //   formData.append('citizenId', userDetail.citizenId);
  //   formData.append('dateOfBirth', userDetail.dateOfBirth);
  //   formData.append('beneficially', userDetail.beneficially);

  //   return formData;
  // }
}
