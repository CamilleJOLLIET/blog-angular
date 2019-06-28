import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() posts: Post;

  constructor() {
    this.getCreationDate();
  }

  ngOnInit() {
  }

  getCreationDate() {
    return new Date();
  }


}
