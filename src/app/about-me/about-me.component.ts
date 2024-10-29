import { Component } from '@angular/core';
import { MovingTextComponent } from "../moving-text/moving-text.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MovingTextComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  title = "About me"
}
