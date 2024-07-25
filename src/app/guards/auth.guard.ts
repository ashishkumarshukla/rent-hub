import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router, 
    private _snackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.localStorageService.getItem('authToken');

    if (token) {
      // Optionally, you can add additional checks here, such as token expiration
      return true;
    } else {
        this._snackBar.open("Unauthorized access, please login and try again!", '', {duration: 2000});
      this.router.navigate(['/listing']);
      return false;
    }
  }
}
