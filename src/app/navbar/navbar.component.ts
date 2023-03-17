import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { NavbarService } from '../NavbarService';
import { ThemeService } from '../ThemeService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selectedTab = 'home';
  theme: string = '';
  isDarkMode: boolean;

  constructor(private themeService: ThemeService, navbarService: NavbarService) {
    this.isDarkMode = this.themeService.darkModeEnabled;
    navbarService.activeItem$.subscribe((item) => {
      this.selectedTab = item;
    });
  }

  ngOnInit() {

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
    if (this.selectedTab === tabName) {
      return 'active';
    }
    //isDarkTheme -> bg-secondary && text light
    return this.themeService.darkModeEnabled ? 'text-light' : 'text-dark';
  }
  getNavbarIcon(): string {
    return this.themeService.darkModeEnabled ? '../../assets/logo/logo_small_icon_only.png' :
      '../../assets/logo/logo_small_icon_only_inverted.png';
  }
  isActive(item: string) {
    return item === this.selectedTab;
  }
}
