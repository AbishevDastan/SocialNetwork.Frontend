import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService,
    private router: Router ) {}

  email: string = '';
  password: string = '';

  error = '';
  errorMessage: string = '';
  successMessage: string = '';

  ngOnInit(): void {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/']).then();
    }
  }

  auth() {
    this.authenticate(this.email, this.password);
  }

  authenticate(email: string, password: string) {
      this.error = '';
      this.errorMessage = '';
      this.successMessage = '';

      this.userService
        .login(email, password)
        .subscribe
          ((res: any) => {
                if(res) {
                  this.router.navigate(['/']).then();
                } else {
                  this.errorMessage = res.message
                }
            },
              error => {
                console.log(error)
              }
          );
    }

    goToRegistration() {
      this.router.navigate(['/registration']).then();
    }
}