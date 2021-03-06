import { Component, OnInit } from '@angular/core';
import { AllBlogsService } from '../all-blogs.service';
import { IBlog } from '../blog.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  blogsArr: Array<IBlog> = [];

  constructor(private userService: AllBlogsService) { }

  ngOnInit(): void {
    this.getBlogsArr();
  }

  getBlogsArr(): void {
    this.blogsArr = this.userService.blogs;
  }

}
