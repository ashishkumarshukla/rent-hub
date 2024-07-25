import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { posts } from '../../../mock-data';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  createPostForm: FormGroup;
  selectedImages: string[] = [];
  submitted: boolean = false;


  constructor(private fb: FormBuilder,   private _snackBar: MatSnackBar,
    private router: Router, private localStorageService: LocalStorageService) {
    this.createPostForm = this.fb.group({
      building: ['', Validators.required],
      name: ['', Validators.required],
      sharedProperty: [false, Validators.required],
      location: ['', Validators.required],
      details: ['', Validators.required],
      leaseType: ['', Validators.required],
      currency: ['INR', Validators.required],
      rent: [0, [Validators.required, Validators.min(0)]],
      negotiable: [false],
      priceMode: ['', Validators.required],
      furnished: ['', Validators.required],
      amenities: this.fb.group({
        wifi: [false],
        gym: [false],
        parking: [false],
        garbage: [false],
        clubHouse: [false],
        visitorParking: [false],
        swimmingPool: [false],
        waterHeater: [false],
        laundry: [false],
        powerbackup: [false],
        // Add more amenities as needed
      }),
      descriptionTitle: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  goBack() {
    this.router.navigate(['listing']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.createPostForm.valid) {
      console.log(posts[0]);
      const otherProps = { id: posts.length+1, images: [], comments: [] }
      posts.push({...this.createPostForm.value, ...otherProps});
      this._snackBar.open("Your property added successfully!", '', {duration: 2000});
      this.goBack();
    } 
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedImages = [];
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

}
