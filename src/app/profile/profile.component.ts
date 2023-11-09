import { Component, OnInit } from '@angular/core';
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
    //this.loadPermission(this.userData.permissions, this.userData);
    //possibility of change user psw, user email, edit the wallet with put 
  }

  logOut() {
    this.userService.logout();
  }

  depositWallet(depositOpt: boolean) {
    let userId = this.userData?.id;
    // if (Number.isInteger(userId) && this.amount > 0) {
    //   this.userService.depositWallet(userId, this.amount, depositOpt).subscribe({
    //     next: (data) => {
    //       localStorage.removeItem('userdata');
    //       localStorage.setItem('userdata', JSON.stringify(data));
    //       this.loadPermission(this.userData?.permissions as UserPermissions, data as UserData);
    //       location.reload();
    //     },
    //     error: (err) => {
    //       const toastBootstrap = document.getElementById('walletError');
    //       toastBootstrap?.classList.add('show');
    //     }
    //   });
    // }
    // else {
    //   const toastBootstrap = document.getElementById('walletError');
    //   let divMessage = document.getElementById('toast-message');
    //   if (divMessage)
    //     divMessage.innerText = "Invalid amount of the transaction required";
    //   toastBootstrap?.classList.add('show');
    // }
  }

  loadPermission(userPermission: UserPermissions, userData : UserData) {
    if (userPermission == null) {
      //this.userService.getPermissions(userData.id)
    }
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
  }
}


export interface UserData {
  id: string;
  userName: string;
  email: string;
  password: string;
  dateCreated: Date;
  dateUpdate: Date;
  wallet: number;
  permissions: UserPermissions[];
  betSlips: [] //BetSlip[];
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