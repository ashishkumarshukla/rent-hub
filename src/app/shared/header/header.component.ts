import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/data.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, private localStorageService: LocalStorageService,
    private sharedService: SharedService) { }
  isUserLoggedIn: boolean = false;

  ngOnInit() {
    console.log("ngonchanges");
    this.sharedService.isUserLoggedIn$.subscribe( data => { this.isUserLoggedIn = data;});
    const token = this.localStorageService.getItem('authToken'); // authToken
    if(token) this.isUserLoggedIn = true;
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
