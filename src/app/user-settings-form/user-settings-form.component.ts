import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: IUserSettings = { ...this.originalUserSettings};
  postError: boolean;
  postErrorMesssage: any;
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.initElements();
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  private initElements() {
    this.postError = false;
    this.postErrorMesssage = '';
  }

  onBlur(field: NgModel) {
    console.log('In onBlur: ' + field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse.error);
    this.postError = true;
    this.postErrorMesssage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('In onSubmit: ' + form.valid);
    this.initElements();
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        err => this.onHttpError(err)
      );
    } else {
      this.postError = true;
      this.postErrorMesssage = 'Please fix the above errors';
    }
  }
}
