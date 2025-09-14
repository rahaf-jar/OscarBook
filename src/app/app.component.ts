import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OscarCardComponent } from './oscar-card/oscar-card.component';
import { ProposalsComponent } from './proposals/proposals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    OscarCardComponent,
    ProposalsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PostsTexts = [
    'look at me i am a buritto 🌯',
    'taking a nap 💤',
    'oops.. i fell asleep again 😴',
    'napping again 😶‍🌫️',
    'its a really cold day 🥶',
    'play time !!',
    'having fun on the swing 😌',
    'Enjoying life 🤩',
    'helloooo there',
    'having fun outside 😍',
    'enjoying the sunlight ☀️',
    'first picture at home 📸',
    'so tired from playing outside 🥱',
  ]; 
  
  PostsImgs = [
    'assets/img/oscar/o1.jpg',
    'assets/img/oscar/o2.jpg',
    'assets/img/oscar/o3.jpg',
    'assets/img/oscar/o4.jpg',
    'assets/img/oscar/o5.jpg',
    'assets/img/oscar/o6.jpg',
    'assets/img/oscar/o7.jpg',
    'assets/img/oscar/o8.jpg',
    'assets/img/oscar/o9.jpg',
    'assets/img/oscar/o10.jpg',
    'assets/img/oscar/o11.jpg',
    'assets/img/oscar/o12.jpg',
    'assets/img/oscar/o13.jpg',
  ];
}