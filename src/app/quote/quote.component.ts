import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  textArray = "Quote of the day".split("");
  
  constructor(private http: HttpClient) {}

  onClick() {
    this.http.get('http://localhost:8000/test').subscribe((res) => {
      console.log(res);
    });
    console.log('I am clicked!');
    console.log(this.textArray);
  }
}
