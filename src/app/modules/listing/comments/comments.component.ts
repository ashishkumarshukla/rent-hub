import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() comments:any;

  commentForm!: FormGroup;
  isUserLoggedIn: boolean = false;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const user = this.localStorageService.getItem('userInfo');
    if(user) this.isUserLoggedIn = true;
    this.commentForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      const user = JSON.parse(this.localStorageService.getItem('userInfo') || '');
      this.comments.push({name: user.name,  message: this.commentForm.value.message});
      this.commentForm.reset();
    }
  }
}
