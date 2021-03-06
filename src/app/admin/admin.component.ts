import { Component, OnInit } from '@angular/core';
import { AllBlogsService } from '../all-blogs.service';
import { IBlog } from '../blog.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  blogsArr: Array<IBlog> = [];

  title: string = '';
  text: string = '';
  author: string = '';

  visibleAlertErr: boolean = true;
  visibleButEditFinal: boolean = true;

  indexforEditF: number;

  activeAdd: boolean = false;
  activeButtonsTable: boolean = false;

  constructor(private userService: AllBlogsService) { }

  ngOnInit(): void {
    this.getBlogsArr();
  }

  getBlogsArr(): void {
    this.blogsArr = this.userService.blogs;
  }

  add(): void {
    if (this.title == '' || this.text == '' || this.author == '') {
      this.visibleAlertErr = false;
    }
    else {
      if (this.text.length > 10) {
        let date = new Date().toLocaleDateString();
        let blog = {
          title: this.title,
          text: this.text,
          shotrText: this.text.substr(0, 7) + '...',
          date: date,
          author: this.author,
        }
        this.blogsArr.push(blog);
        this.title = '';
        this.text = '';
        this.author = '';
      }
      else {
        let date = new Date().toLocaleDateString();
        let blog = {
          title: this.title,
          text: this.text,
          shotrText: this.text.substr(0, 7) + '...',
          date: date,
          author: this.author,
        }
        this.blogsArr.push(blog);
        this.title = '';
        this.text = '';
        this.author = '';
      }
    }
    console.log(this.blogsArr);
  }

  close(): void {
    this.visibleAlertErr = true;
  }

  edit(index: number): void {
    this.title = this.blogsArr[index].title;
    this.text = this.blogsArr[index].text;
    this.author = this.blogsArr[index].author;
    this.activeAdd = true;
    this.visibleButEditFinal = false;
    this.indexforEditF = index;
    this.activeButtonsTable = true;
  }

  editFinal(): void {
    if (this.text.length > 10) {
      let date = new Date().toLocaleDateString();
      this.blogsArr[this.indexforEditF].title = this.title;
      this.blogsArr[this.indexforEditF].text = this.text;
      this.blogsArr[this.indexforEditF].shotrText = this.text.substr(0, 7) + '...';
      this.blogsArr[this.indexforEditF].date = date;
      this.blogsArr[this.indexforEditF].author = this.author;
      this.visibleButEditFinal = true;
      this.activeAdd = false;
      this.title = '';
      this.text = '';
      this.author = '';
    }
    else {
      let date = new Date().toLocaleDateString();
      this.blogsArr[this.indexforEditF].title = this.title;
      this.blogsArr[this.indexforEditF].text = this.text;
      this.blogsArr[this.indexforEditF].shotrText = this.text.substr(0, 7) + '...';
      this.blogsArr[this.indexforEditF].date = date;
      this.blogsArr[this.indexforEditF].author = this.author;
      this.visibleButEditFinal = true;
      this.activeAdd = false;
      this.title = '';
      this.text = '';
      this.author = '';
    }
    this.activeButtonsTable = false;
  }

  delete(index: number): void {
    this.blogsArr.splice(index, 1);
  }

}
