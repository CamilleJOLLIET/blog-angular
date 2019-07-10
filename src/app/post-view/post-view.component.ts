import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})

export class PostViewComponent implements OnInit, OnDestroy {

  title = 'Posts';

  posts: any[];
  postSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

export interface Post {
  postTitle: string;
  postContent: string;
  postLoveIts: number;
  postHateIts: number;
  postCreatedAt: Date;
}
