import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { posts } from '../../../mock-data';
import { LocalStorageService } from '../../../services/local-storage.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [PostComponent, NgIf, ReactiveFormsModule],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.scss'
})
export class ListPostComponent {
  constructor(private fb: FormBuilder, private router: Router, private localStorageService: LocalStorageService) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }
  searchForm!: FormGroup;
  postsBackup = posts;
  posts = posts;
  
  isUserLoggedIn: boolean = false;

  ngOnInit() {
    const token =  this.localStorageService.getItem('authToken');
    if(token) this.isUserLoggedIn = true;
  }

  newPost() {
    this.router.navigate(['/newPost']);
  }

  onSearch() {
    const searchText = this.searchForm.value.search;
    console.log("searchText ", searchText);
    this.posts = this.postsBackup.filter(post => post.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log(this.posts);
  }


}


