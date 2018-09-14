import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mon-pseudo-blog';

  posts: Array<Post>=[
    new Post('Mon premier post', 'S\'il y a plus de "like" alors le fond devient vert'),
    new Post('Mon deuxième post', 'Dans le cas contraire, il devient rouge'),
    new Post('Encore un post', 'Et en cas d\'égalite il est blanc')
  ];

}

export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  //Automatically assigns date
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;

    this.created_at = new Date();
  }
}
