import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  newEmail: string = '';
  name: string = '';
  surname: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  error = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService, 
    private router: Router) { }

  createAccount() {
    this.successMessage = '';
    this.errorMessage = '';
    this.error = '';
    
    this.userService.register(this.newEmail, this.name, this.surname, this.newPassword, this.confirmNewPassword)
        .subscribe
        ((res: any) => {
              if(res){
                this.goToLogin();
                this.errorMessage = '';
                this.successMessage = res.message;
              } else {
                
                this.errorMessage = res.message
              }
          },
             error => {
              console.log(error)
            }
        );    
  }

  goToLogin() {
    this.router.navigate(['/login']).then();
  }
}
