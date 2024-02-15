import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  userDataString: string = "";
  
  ngOnInit() {
    const userDataString = JSON.parse(localStorage.getItem('userdata') ?? '{}');
    console.log(userDataString);
  }
}