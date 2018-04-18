import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Rx';

export interface IPaginatorResult {
  from: number;
  count: number;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() offset = 0;
  @Input() limit = 1;
  @Input() size = 1;
  @Input() range = 3;
  @Output() pageChange: EventEmitter<IPaginatorResult> = new EventEmitter<IPaginatorResult>();

  pages: Observable<number[]>;
  currentPage: number;
  totalPages: number;

  constructor() { }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
    this.selectPage(this.getCurrentPage(this.offset, this.limit));
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }

  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
        .map(offset => this.currentPage + offset)
        .filter(page => this.isValidPageNumber(page, this.totalPages))
        .toArray();
  }

  private isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  private getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  private getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  selectPage(page: number, event?) {
    if (event) {
      this.cancelEvent(event);
    }
    if (this.isValidPageNumber(page, this.totalPages)) {
      const offset = (page - 1) * this.limit;
      this.pageChange.emit({from: offset, count: this.limit});
    }
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}
