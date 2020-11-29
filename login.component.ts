import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserService
} from '../user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  onSubmit(userForm) {
    this.userService.login(userForm.value)
      .subscribe(data => {
        this.cookieService.set("auth_token", data.auth_token)
        this.router.navigate(['list'])
      }, 
      err => {
        alert("Invalid Credentials")
      })
  }


}
