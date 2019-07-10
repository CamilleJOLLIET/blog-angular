import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postHateIts: number;
  @Input() postCreatedAt: Date;
  @Input() index: number;
  @Input() id: number;

  constructor(private postService: PostService) {
  }

  ngOnInit() {

  }

  handleLoveClick() {
    this.postService.loveClick(this.index);
  }

  handleHateClick() {
    this.postService.hateClick(this.index);
  }
}
