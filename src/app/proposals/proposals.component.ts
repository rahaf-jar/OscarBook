import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileRowComponent } from "../profile-row/profile-row.component";

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [CommonModule, ProfileRowComponent],
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  names = ['Mikki', 'Nila', 'Murphy', 'Gnocchi'];
  texts = ['2 years old', '7 years old', '9 years old', '3 years old'];
  images = [
    'assets/img/friends/Mikki.jpg',
    'assets/img/friends/Nila.jpg',
    'assets/img/friends/Murphy.jpg',
    'assets/img/friends/Gnocchi.jpg',
  ];
}
