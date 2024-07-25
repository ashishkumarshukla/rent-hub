import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from '../../../mock-data';
import { LocalStorageService } from '../../../services/local-storage.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [PostComponent, NgIf],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.scss'
})
export class ListPostComponent {
  constructor(private router: Router, private localStorageService: LocalStorageService) {

  }
  posts = posts;
  isUserLoggedIn: boolean = false;

  ngOnInit() {
    const token =  this.localStorageService.getItem('authToken');
    if(token) this.isUserLoggedIn = true;
  }

  newPost() {
    this.router.navigate(['/newPost']);
  }


}


