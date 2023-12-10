import { Component, ViewChild } from '@angular/core';
import { AddPostDto } from 'src/app/models/post/add-post-dto';
import { Post } from 'src/app/models/post/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-feed',
  templateUrl: './posts-feed.component.html',
  styleUrls: ['./posts-feed.component.css']
})
export class PostsFeedComponent {

  @ViewChild('addPostForm') addPostForm: any;
  
  constructor (private postService: PostService) { }

  posts?: Array<Post>;

  addPostDto: AddPostDto = {
    content: "",
  };


  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts().subscribe((data) => {
    console.log(data);
    this.posts = data;
  });
  }

  onAddPostSubmit() {
    this.postService.addPost(this.addPostDto).subscribe((data) => {
        console.log('Post added successfully:', data);
        this.posts?.unshift(data);
        this.addPostForm.resetForm();
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }
}