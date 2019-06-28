import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum recusandae quasi libero facere quis autem aut nobis. Velit natus deleniti non laboriosam aperiam laborum soluta accusamus molestiae ipsum nobis odit mollitia sit distinctio cupiditate asperiores quos in modi dignissimos, rerum minima delectus! Nulla quibusdam, quae ullam accusamus nisi facere.',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum recusandae quasi libero facere quis autem aut nobis. Velit natus deleniti non laboriosam aperiam laborum soluta accusamus molestiae ipsum nobis odit mollitia sit distinctio cupiditate asperiores quos in modi dignissimos, rerum minima delectus! Nulla quibusdam, quae ullam accusamus nisi facere.',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum recusandae quasi libero facere quis autem aut nobis. Velit natus deleniti non laboriosam aperiam laborum soluta accusamus molestiae ipsum nobis odit mollitia sit distinctio cupiditate asperiores quos in modi dignissimos, rerum minima delectus! Nulla quibusdam, quae ullam accusamus nisi facere.',
      loveIts: 0,
      createdAt: new Date()
    }
  ];
}

export interface Post {
    postTitle: string;
    postContent: string;
    postLoveIts: number;
    postCreatedAt: Date;
  }
