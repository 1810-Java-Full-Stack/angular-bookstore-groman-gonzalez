import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bList: Book[];

  constructor(public mainService: MainService ) { }

  ngOnInit() {
    this.mainService.getBook().subscribe(
      (book) => {
        console.log(this.bList);
        this.bList = book;
      }
    );
  }

}
