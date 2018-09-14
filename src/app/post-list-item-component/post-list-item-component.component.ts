import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;

  @Input() loveIts: number;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.loveIts++
  }

  onDontLoveIt(){
    this.loveIts--;
  }
}
