import { ApiService } from './../../core/services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Location } from '@angular/common';



@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;
  title = "";
  searchResults: any;
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 50, 100];
  searchHistory: never[] = [];
  isSearchResultsVisible = false;


  constructor(private apiservice: ApiService, private location: Location) {
    
     this.bookSearch = new FormControl('');
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit(): void {
    this.bookSearch.valueChanges

      .pipe(
        debounceTime(300),
      ).
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      subscribe((value: string) => {
        if (value) {
          this.page = 1;
          this.title = value;
          this.search();
          this.isSearchResultsVisible = true;
          } else {
            this.clear();
            this.isSearchResultsVisible = false;
          }
      });

  }

  
  getRequestParams(searchTitle: string, page: number, pageSize: number, queryString: boolean = true): any {
    let params: any = {};

    if (searchTitle) {
      params[`q`] = searchTitle;
    }

    if (page) {
      params[`page`] = page;
    }

    if (pageSize) {
      params[`limit`] = pageSize;
    }

    if(queryString) {
      params = new URLSearchParams(params).toString()
    }

    return params;
  }

  search(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.apiservice.get(`/search.json?${params}`)
      .subscribe(
        (data: any) => {
          this.searchResults = data.docs;
          this.count = data.num_found;
          
        },
        error => console.log(error)
      )
  }

  clear() {
    this.bookSearch.reset();
    this.searchResults = [];
    this.page = 1;
    this.count = 0;
    this.searchHistory = [];
  }

  

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.search();
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.search();
  }

  clearSearch() {
    throw new Error('Method not implemented.');
  }

  goBack(): void {
    this.clear();
    this.isSearchResultsVisible = false;
    this.location.back();
  }
  
}


function constructor(readonly: any, router: any, Router: any, private1: any, readonly1: any, location: globalThis.Location, Location: any) {
  throw new Error('Function not implemented.');
}

