import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuoteComponent } from '../quote/quote.component';
import { AboutMeComponent } from '../about-me/about-me.component';

enum COMPONENTS {
  ABOUTME="about-me",
  QUOTE="quote"
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, QuoteComponent, AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  COMPONENTS = COMPONENTS;

  private componentName = COMPONENTS.ABOUTME;

  darkMode = true;

  getComp() {
    switch(this.componentName) {
      case COMPONENTS.ABOUTME:
        return AboutMeComponent;
      case COMPONENTS.QUOTE:
        return QuoteComponent
      default:
        return QuoteComponent
    }
  }

  setComponentName(name: COMPONENTS) {
    this.componentName = name;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
  }


  setDarkLightMode() {
    return {
      'bg-slate-700 text-white': this.darkMode,
      'bg-slate-200 text-black': !this.darkMode
    };
  }
}
