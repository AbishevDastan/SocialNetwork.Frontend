import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post?: { content: string; creationDate: Date };
}
