import { Injectable, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('light'); // default theme is 'light'
  private mediaMatcher: MediaQueryList;

  currentTheme = this.theme.asObservable();
  
  constructor(private media: MediaMatcher) {
    // Create a new media query list that will detect changes to the user's system theme preference
    this.mediaMatcher = matchMedia('(prefers-color-scheme: dark)');
  }

  isDarkTheme(): boolean {
    return this.mediaMatcher.matches;
  }

  setTheme(theme: string) {
    this.theme.next(theme);
  }
}