import { IBlog } from "./blog.interface";


export class Blogs implements IBlog {
    constructor(
        public title: string,
        public text: string,
        public shotrText: string,
        public date: string,
        public author: string
    ) { }
}