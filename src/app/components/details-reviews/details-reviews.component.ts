import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-reviews',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit {
  reviews: any[] = [];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.httpClient.get<any[]>('assets/data/reviews.json').subscribe((data:any[]) => {
      this.reviews = data;
    })
  }
}
