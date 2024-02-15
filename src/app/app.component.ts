import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { ThemeService } from './ThemeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FootballBetsUI';
  isLoading = true;
  showNavbar = false;
  themeService: ThemeService;
  constructor(private router: Router, private route: ActivatedRoute, themeService: ThemeService) {
    this.themeService = themeService;
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        if ((this.router.routerState.snapshot as RouterStateSnapshot).url === '/login' ||
          (this.router.routerState.snapshot as RouterStateSnapshot).url === '/register')
          this.showNavbar = false;
        else
          this.showNavbar = true;
    });
  }
}
