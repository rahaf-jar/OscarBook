import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [],
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'] 
})

export class ProfileRowComponent {
  @Input() img: string = 'assets/img/oscar/o6.jpg';
  @Input() name: string = 'Oscar';
  @Input() description: string = '2 years old'
}
