import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  title = 'FootballBetsUI';
  isLoading = true;
  showNavbar = false;

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
