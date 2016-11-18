import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
// Variable to hold all the posts returned from REST Service
  posts: Post[];
// creating an instance of PostsService provider in the constructor
  constructor(private postsService: PostsService) { }
// getposts() function with scope in this component
    getPosts(){
// calling the getPosts() function of PostsService which makes the api call
    this.postsService
    .getPosts()
    .subscribe(res=>{
// store the response in the variable created above
        this.posts = res;
    });
  }

  ngOnInit() {
// trigger local getPosts function on load of component
    this.getPosts();
     console.log(this.getPosts());
  }
  
}
