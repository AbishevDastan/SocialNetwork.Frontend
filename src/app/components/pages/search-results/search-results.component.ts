import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  searchResults: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchText = params['searchText'];
      if (searchText) {
        this.searchUsers(searchText);
      }
    });
  }

  searchUsers(searchText: string): void {
    this.userService.searchUsers(searchText)
      .subscribe(results => {
        this.searchResults = results;
      });
  }

}
