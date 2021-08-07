import { Component, OnInit } from '@angular/core';
import { PostComment, User, UserPost } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => this.user$ = params.id)
  }

  users: User[] = [];
  userPosts: UserPost[] = [];
  comments: PostComment[] = [];
  userDetails: any;
  showLoadAll: boolean = false;

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.params.subscribe((params) => {
      if(this.user$){
        this.getPosts();
        this.getUserById(this.user$);
        
      }
  });
      // this.getPosts();
    
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users=>this.users = users);
  }

  getUserById(userId: number): void{
    this.userService.getUserById(userId)
    .subscribe(userDetails => {
      this.userDetails = userDetails;
      console.log("-----UserDetails---", this.userDetails);
    })
  }

  getPosts(loadAll: boolean = false): void {
    console.log(this.user$);
    this.comments  = [];
    this.userService.getUserPosts()
    .subscribe(userposts => {
      let posts = userposts.filter((post: UserPost) => post.userId == this.user$);
      posts.forEach(data => {
        console.log("data----", data.id);
        this.showLoadAll = !loadAll? true: false;
        this.userService.getPostComments(data.id)
    .subscribe(comments => data.commentData = comments);
        
      })
      this.userPosts = loadAll ? posts: posts.slice(0,3);

      console.log("data----", this.userPosts);
    }
    );
  }

}
