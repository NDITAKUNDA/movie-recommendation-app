import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-reviews',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent {
  reviews: any[] = [
    {
      rating: 9.5,
      description: 'This is what the review is all about',
      author: 'Review Author',
      people: '230 of 300 people found this useful'
    },
    {
      rating: 8,
      description: 'This is what the review is all about',
      author: 'Review Author',
      people: '230 of 300 people found this useful'
    },
    {
      rating: 5.5,
      description: 'This is what the review is all about',
      author: 'Review Author',
      people: '230 of 300 people found this useful'
    }
  ]
}
