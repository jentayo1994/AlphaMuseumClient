import {Component, OnInit} from '@angular/core';
import {ISlide} from '../../components/carousel/carousel.component';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router';
import {ArticlesService} from '../../shared/services/articles.service';
import {Article} from '../../models/article';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
    article: Article;

    slides: ISlide[] = [
        {
            href: 'https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg',
            alt: '',
            caption: 'Новина'
        }
    ];

    constructor(private _articlesService: ArticlesService, private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this._activatedRoute.paramMap.subscribe(
            params => {
                const id = params['id'];
                this._articlesService.getArticle(id);
            }
        );
    }
}
