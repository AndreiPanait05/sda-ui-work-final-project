import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../model/User';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  userTypes: string[] = ['DEVELOPER', 'PROJECT_MANAGER'];

  constructor(private userService: UserService,
              private route: Router) { }

  ngOnInit() {}

  save() {
    this.userService.saveUser(this.user).subscribe(data => {
      this.route.navigate(["/login"]);
    });
  }
}
