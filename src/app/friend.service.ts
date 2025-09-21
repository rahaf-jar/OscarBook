import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = ['Mikki'];
  texts = ['2 years old'];
  images = [
    'assets/img/friends/Mikki.jpg',
  ];

  constructor() { }
}
