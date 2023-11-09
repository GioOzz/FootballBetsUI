import { Component } from '@angular/core';
import { NavbarService } from '../NavbarService';
import { ThemeService } from '../ThemeService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedTab = 'home';
  theme: string = 'dark';
  isDarkMode: boolean;

  constructor(private themeService: ThemeService, navbarService: NavbarService) {
    this.isDarkMode = this.themeService.darkModeEnabled;
    navbarService.activeItem$.subscribe((item: any) => {
      this.selectedTab = item;
    });
  }
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkModeState(this.isDarkMode);
  }

  isDarkTheme() {
    return this.themeService.darkModeEnabled;
  }
  getNavbarTheme(): string {
    return this.themeService.darkModeEnabled ? 'bg-secondary' : 'bg-primary';
  }
  getNavbarTextTheme(tabName: string): string {
    if (this.selectedTab === tabName && this.isDarkMode)
      return 'active text-white';
    else if (this.selectedTab === tabName && !this.isDarkMode)
      return 'active text-dark';
    return this.isDarkMode ? 'text-dark' : 'text-white';
  }
  getNavbarIcon(): string {
    return this.themeService.darkModeEnabled ? '../../assets/logo/logo_small_icon_only.png' :
      '../../assets/logo/logo_small_icon_only_inverted.png';
  }
  isActive(item: string) {
    return item === this.selectedTab;
  }
}