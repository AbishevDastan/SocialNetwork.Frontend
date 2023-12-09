import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-short-info',
  templateUrl: './user-short-info.component.html',
  styleUrls: ['./user-short-info.component.css']
})
export class UserShortInfoComponent {
  @Input() user?: { id: number; email: string; name: string; surname: string, creationDate: Date };
}
