import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsReviewsComponent, DetailsMoviesComponent, DetailsActorsComponent, RouterLink, RouterOutlet],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  movieId = "";

  constructor(private _activedRoute: ActivatedRoute) {
    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
    })
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngAfterContentInit(): void {
  }
  ngAfterViewInit(): void {
  }

}
