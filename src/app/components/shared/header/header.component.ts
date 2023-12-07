import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService,
    private router: Router) { }

  get isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']).then();
  }
}
