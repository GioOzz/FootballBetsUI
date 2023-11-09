import { Component, HostListener } from '@angular/core';
import { UserService } from '../UserService';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  isSuccessful = false;
  isLoginFailed = false;
  errorMessage = '';
  permission: string[] = [];
  form: any = { username: null, password: null };
  
  constructor(private userService: UserService) { }
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == "Enter")
      this.submit();
  }

  submit() {
    const { username, password } = this.form;
    this.userService.login(username, password).subscribe({
      next: data => {
        this.isLoginFailed = false;
        this.isSuccessful = true;
        localStorage.setItem("userdata", JSON.stringify(data));
        location.replace("/profile");
      },
      error: err => {
        this.isLoginFailed = true;
        if (err.status == 409)
          this.errorMessage = err.message;
        if (err.status == 404 || err.status == 500)
          this.errorMessage += "Couldn't complete the process, an error occurred!";
      }
    });
  }
}