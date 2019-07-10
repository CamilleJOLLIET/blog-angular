import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post-view/post-view.component';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {

  title = 'Posts';

  @Input() posts: any[];
  postSubscription: Subscription;
  // posts: any[];

  constructor(private postService: PostService) {
    this.getCreationDate();
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  getCreationDate() {
    return new Date();
  }

  handleLoveAllClick() {
    this.postService.likeAll();
  }

  handleHateAllClick() {
    this.postService.hateAll();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
