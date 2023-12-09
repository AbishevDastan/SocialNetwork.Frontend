import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AddPostDto } from '../models/post/add-post-dto';
import { UpdatePostDto } from '../models/post/update-post-dto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = "Post";

  getPosts () : Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.apiUrl}/${this.url}/posts`);
  }

  getPost (postId?: number) : Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/${this.url}/${postId}`);
  }

  // searchPosts(searchText: string) : Observable<Array<Post>> {
  //   return this.http.get<Array<Post>>(`${environment.apiUrl}/${this.url}/${searchText}/search`);
  // }

  addPost(addPost: AddPostDto): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/${this.url}`, addPost);
  }

  updatePost(updatePost: UpdatePostDto, postId?: number): Observable<Post> {
    return this.http.put<Post>(`${environment.apiUrl}/${this.url}/${postId}`, updatePost);
  }

  deletePost(postId?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${postId}`);
  }
}
