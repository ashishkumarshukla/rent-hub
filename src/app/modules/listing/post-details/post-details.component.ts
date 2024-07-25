import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedService } from '../../../services/data.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommentsComponent, NgFor],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  post!: Post;

  constructor(private sharedService: SharedService) {
    this.sharedService.postData$.subscribe( data => { this.post = data;});
  }

  getAmenities(obj: any) {
    return Object.keys(obj)
    .filter(key => obj[key])
    .join(', ');
  }    

}

interface Post {
  title: string;
  building: string;
  name: string;
  sharedProperty: boolean;
  location: string;
  details: string;
  leaseType: string;
  currency: string;
  rent: number;
  negotiable: boolean;
  priceMode: string;
  furnished: boolean;
  amenities: string[];
  descriptionTitle: string;
  description: string;
  images: { url: string }[];
  comments: [{name: string, message: string}]
}
