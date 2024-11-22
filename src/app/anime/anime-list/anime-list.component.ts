import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
viewDetail(arg0: number) {
throw new Error('Method not implemented.');
}
onMoreInfo(arg0: number) {
throw new Error('Method not implemented.');
}
  animes: Anime[] = [];
  totalEpisodes: number = 0;
  averageRating: number = 0;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.fetchAnimes();
  }

  fetchAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.calculateStatistics();
    });
  }

  calculateStatistics(): void {
    this.totalEpisodes = this.animes.reduce((total, anime) => total + anime.episode, 0); // Correcto: 'episode'
    this.averageRating = parseFloat(
      (this.animes.reduce((total, anime) => total + parseFloat(anime.Rating), 0) / this.animes.length).toFixed(2) // Correcto: 'Rating' (convertido a número)
    );
  }
} 