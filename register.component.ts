import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, 
    private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(registerForm) {

    if (registerForm.form.valid) {
      let key = "users"
      let r = localStorage.getItem(key)
      let u = JSON.parse(r)
      if (u == null && !(u instanceof Array)) {
        u = []
      }
      u.push(registerForm.value)
      localStorage.setItem(key, JSON.stringify(u))


      let pass = registerForm.form.get('password').value;
      let confirmPass = registerForm.form.get('password_confirmation').value;

      if (pass == confirmPass) {
        this.userService.registerUser(registerForm.value)
        .subscribe(data => {}
          )
        // this.router.navigate(['login'])
      } else {
        console.log("Try again")
      }

    }

  }

}
