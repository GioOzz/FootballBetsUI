import { Component } from '@angular/core';
import { ThemeService } from '../ThemeService';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  constructor(private themeService: ThemeService) { }
  getTextTheme(): string {
    //isDarkTheme -> bg-secondary && text light
    return this.themeService.isDarkTheme() ? 'text-dark' : 'text-light';
  }
}
