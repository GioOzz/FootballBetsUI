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
  theme : string = '';
  isDarkTheme: boolean;

  constructor(private themeService: ThemeService, navbarService : NavbarService) { 
    this.isDarkTheme = this.themeService.isDarkTheme();
    navbarService.activeItem$.subscribe((item) => {
      this.selectedTab = item;
    });
  }
  
  ngOnInit() {
    this.themeService.currentTheme.subscribe(theme => this.theme = theme);
  }

  getNavbarTheme(): string {
    return this.themeService.isDarkTheme() ? 'bg-secondary' : 'bg-primary';
  }
  getNavbarTextTheme(tabName: string): string {
    if (this.selectedTab === tabName) {
      return 'active';
    }
    //isDarkTheme -> bg-secondary && text light
    return this.themeService.isDarkTheme() ? 'text-light' : 'text-dark';
  }
  getNavbarIcon(): string {
    return this.themeService.isDarkTheme() ? '../../assets/logo/logo_small_icon_only.png' :
      '../../assets/logo/logo_small_icon_only_inverted.png';
  }
  isActive(item: string) {
    return item === this.selectedTab;
  }
}
