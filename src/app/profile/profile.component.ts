import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from '../NavbarService';
import { ThemeService } from '../ThemeService';
import { UserService } from '../UserService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  constructor(private navbarService: NavbarService, private userService: UserService, themeService: ThemeService) {
    this.navbarService.setActiveItem('profile');
    this.themeService = themeService;
  }
  themeService: ThemeService;
  userData: UserData | undefined;
  userPermissionActive: Array<ActivePermissions> = [];
  amount: number = 0.0;

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userdata') || '{}') as UserData;
    console.log("userData profile.component.ts", this.userData);
    let userPermission = this.userData.permissions as UserPermissions;
    if (userPermission.eng)
      this.userPermissionActive.push({
        icon: 'https://crests.football-data.org/770.svg',
        title: "Premier League"
      });
    if (userPermission.ita)
      this.userPermissionActive.push({
        icon: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
        title: "Serie A"
      });
    if (userPermission.ger)
      this.userPermissionActive.push({
        icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
        title: "Bundesliga"
      });
    if (userPermission.eur)
      this.userPermissionActive.push({
        icon: 'https://crests.football-data.org/EUR.svg',
        title: "UEFA Champions League"
      });
    if (userPermission.fra)
      this.userPermissionActive.push({
        icon: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        title: "France"
      });
    if (userPermission.spa)
      this.userPermissionActive.push({
        icon: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
        title: "Spain"
      });

    if (this.userPermissionActive.length == 0)
      this.userPermissionActive.push({
        icon: 'https://cdn-icons-png.flaticon.com/512/1208/1208117.png',
        title: "No competition avaliable for your profile."
      });
    //possibility of change user psw, user email, edit the wallet with put 
  }

  logOut() {
    // localStorage.clear();
    location.replace(" ");
  }

  updateWallet() {
    this.userService.updateWallet(this.amount).subscribe({
      next: (data) => {
        location.reload();
      },
      error: (err) => {
        const toastBootstrap = document.getElementById('walletError');
        toastBootstrap?.classList.add('show');
          
      }
    });
  }
}

export interface UserData {
  id: number;
  userName: string;
  email: string;
  password: string;
  dateCreated: Date;
  dateUpdate: Date;
  wallet: number;
  permissions: UserPermissions
  betSlips: [] // BetSlip
}
export interface UserPermissions {
  idPermission: number;
  userId: number;
  eng: boolean;
  ita: boolean;
  ger: boolean;
  eur: boolean;
  fra: boolean;
  spa: boolean
}
export interface ActivePermissions {
  icon: string;
  title: string;
}