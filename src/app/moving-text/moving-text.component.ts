import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moving-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moving-text.component.html',
  styleUrl: './moving-text.component.scss'
})
export class MovingTextComponent {
  @Input({required: true, transform: splitString}) text!: string;
}

function splitString(text: string) {
  return text.split("");
}
