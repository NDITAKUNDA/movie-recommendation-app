import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-actors',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit {
  actors: any[] = [];
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.getActors();
  }

  getActors() {
    this.httpClient.get<any[]>('assets/data/actors.json').subscribe((data:any[]) => {
      this.actors = data;
    })
  }
}
