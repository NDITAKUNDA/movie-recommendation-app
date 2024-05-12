import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.httpClient.get<any[]>('assets/data/movies.json').subscribe((data:any[]) => {
      this.movies = data;
    })
  }
}
