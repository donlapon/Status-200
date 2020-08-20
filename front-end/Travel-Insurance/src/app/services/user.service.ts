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
  getUserDetail(user): Observable<UserDetail[]>{
    return this.userDetail = user;
  }

  sendInsuredInfo(insuredInfo: UserDetail): Observable<InsuredInfo[]> {
    // console.log('insuredInfo', insuredInfo);

    const dateOfBirth = '2020-08-19';
    const user = new InsuredInfo({...insuredInfo})

    // const user = new InsuredInfo({'destinationCountry',
    //   'packageName',
    //   '2020-08-18',
    //   '2020-08-18',
    //   0,
    //   0,
    //   insuredInfo.citizenId,
    //   insuredInfo.firstName,
    //   insuredInfo.title,
    //   insuredInfo.lastName,

    //   dateOfBirth,
    //   insuredInfo.beneficially,
    //   '',
    //   insuredInfo.email);
    // console.log('ddd', user);
    return this.http.post<InsuredInfo[]>('http://167.99.70.167:8080/api/v1/insuredInfo', [user]);

  }
}
