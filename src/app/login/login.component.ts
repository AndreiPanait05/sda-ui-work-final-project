import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Failed to authenticate';

  constructor(
    private route: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username);
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
      this.route.navigate(["/home"]);
    });
  }

}
