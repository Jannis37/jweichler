import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MovingTextComponent } from "../moving-text/moving-text.component";

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    MovingTextComponent
],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  
  constructor(private http: HttpClient) {}

  onClick() {
    this.http.get('http://localhost:8000/test').subscribe((res) => {
      console.log(res);
    });
    console.log('I am clicked!');
  }
}
