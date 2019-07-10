import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post-view/post-view.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  posts: Post;
  title: string;
  content: string;
  loveIts: number;
  hateIts: number;
  createdAt: Date;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.postService.getPostById(+id).title;
    this.content = this.postService.getPostById(+id).content;
    this.loveIts = this.postService.getPostById(+id).loveIts;
    this.hateIts = this.postService.getPostById(+id).hateIts;
  }

}
