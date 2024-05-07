import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  movieTitle = "";

  constructor(private _activedRoute: ActivatedRoute) {
    this._activedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
      console.log("Movie Title is: " + this.movieTitle);
    })
  }
  ngOnInit(): void {
  }


}
