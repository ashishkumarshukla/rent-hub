import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { favourites, posts } from '../../../mock-data';
import { SharedService } from '../../../services/data.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  constructor(private _snackBar: MatSnackBar, private sharedService: SharedService, private router: Router) {}
  @Input() post: any;
  currentSlide = 0;
  totalSlides = 3; // Adjust this based on the number of images

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlidePosition();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlidePosition();
  }

  updateSlidePosition(): void {
    const slides = document.querySelector('.slides') as HTMLElement;
    slides.style.transform = `translateX(-${this.currentSlide * slides.offsetWidth}px)`;
  }

  viewDetails() {
    this.router.navigate(['post-details']);
    this.sharedService.updatePostData(this.post);
  }

  markFavourite(data: any) {
    favourites.push(data);
    let post = posts.find(post => post.id === data.id);
    if (post) {
      post.isFavorite = !post.isFavorite;
      this._snackBar.open(post.isFavorite ? "Property marked as favourite!" :"Property removed from favourite!" , '', {duration: 2000});
    }
  }

}


