import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotAuthorizeComponent } from './components/not-authorize/not-authorize.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { HeaderDirective } from './directives/header.directive';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    DetailsComponent,
    DetailsReviewsComponent,
    DetailsMoviesComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    NotAuthorizeComponent,
    SearchComponent,
    DetailsActorsComponent,
    HeaderDirective,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
