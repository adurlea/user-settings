import { Injectable } from '@angular/core';
import { IUserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(usserSettings: IUserSettings): Observable<any> {
    return this.httpClient.post('https://putsreq.com/YQQykqWn4a28jo1Ag3uj', usserSettings);
    // return of(usserSettings);
  }
}
