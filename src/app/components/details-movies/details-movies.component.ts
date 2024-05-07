import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent {
  movies: any[] = [
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Movie #1 Name',
      rating: 9.5
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Movie #2 Name',
      rating: 9.5
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Movie #3 Name',
      rating: 9.5
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Movie #4 Name',
      rating: 9.5
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Movie #5 Name',
      rating: 9.5
    }
  ]
}
