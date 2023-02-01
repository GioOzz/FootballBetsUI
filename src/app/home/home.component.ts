import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../UserService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

//Home UI sidenav for BetSlip, ts request API (1st matches and StringBuilder() for 1 request at a time)

export class HomeComponent implements OnInit {
  constructor(private userservice: UserService) { }
  userDataString: String = "";

  ngOnInit() {
    const userDataString = localStorage.getItem('userdata');
    if (userDataString) {
      getvalues(userDataString)
    }
  }
}
function getvalues(userDataString: string) {
  const userData = JSON.parse(userDataString).value;
  console.log(userData);
  console.log(userData.userName);
  console.log(userData.password);
  console.log(userData.email);
  console.log(userData.wallet);
}

