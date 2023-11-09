import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkModeState: BehaviorSubject<boolean>;
  private _darkModeLocalStorageKey = 'darkMode';

  constructor() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._darkModeState = new BehaviorSubject<boolean>(this.getDarkModeFromLocalStorage() || isDarkMode);
  }

  get darkModeEnabled(): boolean {
    return this._darkModeState.value;
  }

  toggleDarkMode(): void {
    const darkModeEnabled = !this.darkModeEnabled;
    this.setDarkModeState(darkModeEnabled);
  }

  setDarkModeState(isEnabled: boolean): void {
    document.body.classList.toggle('dark', isEnabled);
    localStorage.setItem(this._darkModeLocalStorageKey, JSON.stringify(isEnabled));
    this._darkModeState.next(isEnabled);
  }

  isDarkTheme(): boolean {
    return this._darkModeState.value;
  }

  private getDarkModeFromLocalStorage(): boolean {
    const isDarkMode = localStorage.getItem(this._darkModeLocalStorageKey);
    return isDarkMode ? JSON.parse(isDarkMode) : false;
  }
}