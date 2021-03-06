import { Injectable } from '@angular/core';
import { IBlog } from './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsService {

  blogs: Array<IBlog> = [];

  constructor() { }
}
