import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() {
  }

  ngOnInit() {
  }

  handleLoveClick() {
    this.postLoveIts++;
  }

  handleHateClick() {
    this.postLoveIts--;
  }
}
