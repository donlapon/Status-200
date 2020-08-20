import { Injectable, ComponentFactoryResolver } from '@angular/core';
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
  getUserDetail(user):Observable<UserDetail[]>{
    return this.userDetail = user;
  }
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

  // //  return of([user1, user2, user3]);
  }
}
