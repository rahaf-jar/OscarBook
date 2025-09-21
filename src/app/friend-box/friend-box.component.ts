import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss'],
})
export class FriendBoxComponent {

  constructor(public fs: FriendService) {}
}
