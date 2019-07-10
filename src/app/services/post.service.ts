import { Subject } from 'rxjs/Subject';

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      id: 1,
      title: 'Mon premier post',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum recusandae quasi libero facere quis autem aut nobis. Velit natus deleniti non laboriosam aperiam laborum soluta accusamus molestiae ipsum nobis odit mollitia sit distinctio cupiditate asperiores quos in modi dignissimos, rerum minima delectus! Nulla quibusdam, quae ullam accusamus nisi facere.',
      loveIts: 0,
      hateIts: 0,
      createdAt: Date
    },
    {
      id: 2,
      title: 'Mon deuxième post',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum recusandae quasi libero facere quis autem aut nobis. Velit natus deleniti non laboriosam aperiam laborum soluta accusamus molestiae ipsum nobis odit mollitia sit distinctio cupiditate asperiores quos in modi dignissimos, rerum minima delectus! Nulla quibusdam, quae ullam accusamus nisi facere.',
      loveIts: 0,
      hateIts: 0,
      createdAt: Date
    },
    {
      id: 3,
      title: 'Mon troisième post',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum recusandae quasi libero facere quis autem aut nobis. Velit natus deleniti non laboriosam aperiam laborum soluta accusamus molestiae ipsum nobis odit mollitia sit distinctio cupiditate asperiores quos in modi dignissimos, rerum minima delectus! Nulla quibusdam, quae ullam accusamus nisi facere.',
      loveIts: 0,
      hateIts: 0,
      createdAt: Date
    }
  ];

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  likeAll() {
    for (const post of this.posts) {
      post.loveIts++;
    }
  }

  hateAll() {
    for (const post of this.posts) {
      post.hateIts++;
    }
  }

  loveClick(i: number) {
    this.posts[i].loveIts++;
  }

  hateClick(i: number) {
    this.posts[i].hateIts++;
  }

  getPostById(id: number) {
    const post = this.posts.find(
      (postObject) => {
        return postObject.id === id;
      }
    );
    return post;
  }

  addPost(title: string, category: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      hateIts: 0,
      createdAt: Date,
      category: '',
    };
    postObject.title = title;
    postObject.category = category;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length - 1)].id +1;
    this.posts.push(postObject);
    this.emitPostSubject();
  }
}
