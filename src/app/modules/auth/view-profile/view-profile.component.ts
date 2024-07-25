import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/data.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss'
})
export class ViewProfileComponent {
  user: any;

  constructor(private router: Router, private localStorageService: LocalStorageService,
    private sharedService: SharedService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    // Fetch user data from a service or local storage
    const loggedInUser = JSON.parse(this.localStorageService.getItem('userInfo') || '');
    this.user = {
      username: '',
      email: loggedInUser?.email,
      fullName: loggedInUser?.name,
      contactNumber: '',
      address: ''
    };
  }


  onEdit() {

  }
  onLogout() {
    this.localStorageService.clear();
    this.sharedService.updateData(false);
    // this.isUserLoggedIn = false;
    this.router.navigate(['login']);
    this._snackBar.open("Logout Successful!", '', {duration: 2000});
  }
}
