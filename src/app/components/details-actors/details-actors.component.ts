import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-actors',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent {
  actors: any[] = [
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Actor 1 Name',
      role: 'Actor Role'
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Actor 2 Name',
      role: 'Actor Role'
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Actor 3 Name',
      role: 'Actor Role'
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Actor 4 Name',
      role: 'Actor Role'
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Actor 5 Name',
      role: 'Actor Role'
    },
    {
      imageUrl: '../../../assets/image/actor.jpg',
      name: 'Actor 6 Name',
      role: 'Actor Role'
    }
  ]
}
