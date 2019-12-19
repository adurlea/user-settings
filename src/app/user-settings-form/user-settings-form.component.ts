import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { error } from '@angular/compiler/src/util';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onBlur(field: NgModel) {
    console.log('In onBlur: ' + field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('In onSubmit: ' + form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => console.error('error: ', error)
    );
  }
}
