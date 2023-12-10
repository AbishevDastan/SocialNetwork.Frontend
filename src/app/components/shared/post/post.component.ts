import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { UpdatePostDto } from 'src/app/models/post/update-post-dto';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private postService: PostService) { }

  @Input() post?: { id: number; content: string; creationDate: Date };

  // updatePostDto: UpdatePostDto = {
  //   content: ""
  // };

  // updatedPostId?: number = this.post?.id;
  // updatedPostContent: string = "";


  // passPostToUpdate(post: Post ){
  //   this.updatedPostId = post?.id;
  //   this.updatedPostContent = post.content;
  // }

  // onUpdatePostSubmit() {
  //   this.updatePostDto = {
  //       content: this.updatedPostContent
  //   }
  //   this.postService.updatePost(this.updatePostDto, this.post?.id).subscribe(
  //     (data) => {
  //       console.log('Post updated successfully:', data);
  //       this.updatePostDto = { content: data.content };
  //     },
  //     (error) => {
  //       console.error('Error updating post:', error);
  //     }
  //   );
  // }

  selectedReaction: string | null = null;

  react(reaction: string): void {
    if (this.selectedReaction === reaction) {
      this.selectedReaction = null;
    } else {
      this.selectedReaction = reaction;
    }
  }
}
