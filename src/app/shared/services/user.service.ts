import { Injectable } from '@angular/core';
import { User, UserPost, PostComment } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apisUrl = 'https://jsonplaceholder.typicode.com'; 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apisUrl+
      '/users');
  }

  getUserById(userId: number): Observable<User[]>{
    return this.http.get<User[]>(this.apisUrl+
      '/users/'+userId);
  }

  getUserPosts(): Observable<UserPost[]>{
    return this.http.get<UserPost[]>(this.apisUrl+
      '/posts');
  }

  getPostComments(postId: number): Observable<PostComment[]>{
    return this.http.get<PostComment[]>(this.apisUrl+'/comments?postId='+postId)
  }
}
