import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oscar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oscar-card.component.html',
  styleUrls: ['./oscar-card.component.scss']
})

export class OscarCardComponent {
  @Input() text: string = '';
  @Input() img: string = '';

}
