import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss'],
})
export class FriendBoxComponent {
  names = ['Mikki', 'Nila', 'Murphy', 'Gnocchi'];
  texts = ['2 years old', '7 years old', '9 years old', '3 years old'];
  images = [
    'assets/img/friends/Mikki.jpg',
    'assets/img/friends/Nila.jpg',
    'assets/img/friends/Murphy.jpg',
    'assets/img/friends/Gnocchi.jpg',
  ];
}
