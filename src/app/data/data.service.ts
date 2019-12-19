import { Injectable } from '@angular/core';
import { IUserSettings } from './user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingsForm(usserSettings: IUserSettings): Observable<IUserSettings> {
    return of(usserSettings);
  }
}
