import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,) { }

    searchText: string = '';
    users: Array<User> = [];
    searchResults: any[] = [];

  get isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  searchUsers(): void {
    if (this.searchText.trim() !== '') {
      this.router.navigate(['/search-results'], { queryParams: { searchText: this.searchText } });
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']).then();
  }
}
