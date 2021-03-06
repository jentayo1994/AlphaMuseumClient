import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../shared/services/articles.service';
import {Article} from '../../shared/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    const limit = {param: 'filter[limit]', value: '4'};
    this.articlesService.getArticles(limit).subscribe(articles => this.articles = articles);
  }
}
