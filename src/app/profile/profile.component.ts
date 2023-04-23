import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../NavbarService';
import { ThemeService } from '../ThemeService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private navbarService: NavbarService, private _themeService: ThemeService) {
    this.navbarService.setActiveItem('profile');
    this.themeService = this._themeService;
  }

  themeService: ThemeService;
  userData: UserData | undefined;
  userPermissionActive: Array<ActivePermissions> = [];

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
// id:2
// userName:"testusername1"
// email:"test2@test.dev"
// password:"test123"
// dateCreated:"2023-04-21"
// dateUpdate:"2023-04-21"
// permissions:{ idPermission: 2, userId: 2, eng: false, ita: false, ger: false}
// betSlips:[]
// wallet:0

