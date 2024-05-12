import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from '../../directives/header.directive';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, HeaderDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.getFanFavourites();
    this.getTopMovies();
  }

  fanFavourites: any[] = [];
  topMovies: any[] = [];

  getFanFavourites() {
    this.httpClient.get<any[]>('assets/data/fanFavourites.json').subscribe((data:any[]) => {
      this.fanFavourites = data;
    })
  }

  getTopMovies() {
    this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe((data:any[]) => {
      this.topMovies= data;
    })
  }
}
