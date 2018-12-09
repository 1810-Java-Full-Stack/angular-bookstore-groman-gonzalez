import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/Book';
import { Author } from '../model/Author';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public book: Book;
  public author: Author;
  public id: string;

  constructor(
    public route: ActivatedRoute,
    public service: MainService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('book');
    this.service.getBookById(this.id).subscribe(
      (b) => {
        this.book = b;
        this.service.getAuthorById(this.book.authorId).subscribe(
          (a) => { this.author = a; }
        );
      }
    );
  }
  addBook() {
    this.service.updateBook(this.book).subscribe(
      (b) => {
        console.log(this.book);
        this.book = b;
      }
    );
  }

}
