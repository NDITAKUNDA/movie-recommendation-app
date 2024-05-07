import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from '../../directives/header.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, HeaderDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  fanFavourites: any[] = [
    {
      imageUrl: '../../../assets/image/lion.jpg',
      title: 'Movie Title',
      actors: 'Movie Actors',
      year: '2023',
      rating: 9.5,
      trophy: '1'      
    },
    {
      imageUrl: '../../../assets/image/lion.jpg',
      title: 'Movie #2 Title',
      actors: 'Movie #2 Actors',
      year: '2023',
      rating: 9.5,
      trophy: '1'      
    },
    {
      imageUrl: '../../../assets/image/lion.jpg',
      title: 'Movie #3 Title',
      actors: 'Movie #3 Actors',
      year: '2023',
      rating: 9.5,
      trophy: '1'      
    },
    {
      imageUrl: '../../../assets/image/lion.jpg',
      title: 'Movie #4 Title',
      actors: 'Movie #4 Actors',
      year: '2023',
      rating: 9.5,
      trophy: '1'      
    }
  ]

  topMovies: any[] = [
    {
      imageUrl: '../../../assets/image/lion.jpg',
      title: 'Movie #1 Title',
      description: 'This is a breif description of the movie'
    },
    {
      imageUrl: '../../../assets/image/lion.jpg',
      title: 'Movie #2 Title',
      description: 'This is a breif description of the movie'
    }
  ]
}
