import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Books } from '../mock-books';
import { Author } from '../model/Author';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public author: Author;
  public id: string;

  constructor(
              public service: MainService,
              public router: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('author');
    this.service.getAuthorById(this.id).subscribe(
      (a) => {
        this.author = a;
      }
    );
  }

  addAuthor() {
    this.service.updateAuthor(this.author).subscribe(
      (a) => {
        console.log(this.author);
        this.author = a;
      }
    );
  }
}
