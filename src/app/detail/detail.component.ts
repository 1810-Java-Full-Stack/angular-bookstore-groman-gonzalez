import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Books } from '../books';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @Input() book: Book;
  books = Books;
  allBooks: Book;

  constructor() { }

  ngOnInit() {
  }
  getBook(book: Book) {
    this.allBooks = book;
  }

}
