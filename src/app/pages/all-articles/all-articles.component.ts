import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';
import {ArticlesService} from '../../shared/services/articles.service';
import {IPaginatorResult} from '../../components/paginator/paginator.component';
import {Article} from '../../shared/models/article';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  @ViewChild('scroll') element: ElementRef;
  count = 0;
  offset = 0;
  limit = 6;
  articles: Article[] = [];
  slides: ISlide[] = [
    {
      href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
      alt: '',
      caption: 'Новини'
    }
  ];
  constructor(private _articleService: ArticlesService) {
    _articleService.getCount().subscribe((count) => this.count = count );
  }

  ngOnInit() {
  }

  onPageChanged(result: IPaginatorResult) {
    const limit = {param: 'filter[limit]', value: this.limit.toString()};
    const offset = {param: 'filter[skip]', value: this.offset.toString()};
    this.element.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
    console.log(result);
    console.log(this.count);
    this._articleService.getArticles(limit, offset).subscribe((articles) => {
      console.log(articles);
      console.log(this.count);
      this.articles = articles;
      this.offset = result.from;
    });
  }

}
