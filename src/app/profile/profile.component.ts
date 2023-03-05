import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { NavbarService } from '../NavbarService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private navbarService: NavbarService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        if ((this.router.routerState.snapshot as RouterStateSnapshot).url === '/profile' ||
          (this.router.routerState.snapshot as RouterStateSnapshot).url === '/settings')
          navbarService.setActiveItem('more')
        else
          navbarService.setActiveItem('home')
    });
  }

  ngOnInit(): void {

  }
}
